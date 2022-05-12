<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // create a validator for each field in the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|alpha',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
            'gender' => 'required|in:m,f',
            'dob' => 'required|date|before:today',
            'phone' => 'required|digits:10',
            'address'=> 'required'
        ]);

        // handle the validator
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        // create the user and crypt the password
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->plainTextToken;
        $success['name'] =  $user->name;

        return $this->sendResponse($success, 'User register successfully.');
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // if the user exist return is token and is name else return a unauthorised response
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            $success['name'] =  $user->name;

            return $this->sendResponse($success, 'User login successfully.');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }
}
