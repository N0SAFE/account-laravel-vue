<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    /**
     * @test
     */
    public function itListsUsers()
    {
        $response = $this->get('/api/users');

        dd($response);

        $response->assertOk();

        $this->assertCount(20, $response->json('data'));
    }
}
