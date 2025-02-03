<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FibonacciController extends Controller
{
    public function generateFibonacci($count)
    {
        $count = (int) $count;

        if ($count <= 0) {
            return response()->json(['message' => 'Jumlah deret harus lebih besar dari 0'], 400);
        }

        $fibonacci = [];

        for ($i = 0; $i < $count; $i++) {
            if ($i === 0) {
                $fibonacci[] = 0;
            } elseif ($i === 1) {
                $fibonacci[] = 1;
            } else {
                $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
            }
        }

        return response()->json($fibonacci);
    }
}
