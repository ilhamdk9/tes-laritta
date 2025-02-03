<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SortArrayController extends Controller
{
    public function generateSortArray(Request $request)
    {
        $values = $request->input('values', []);  
    
        if (count($values) > 0) {
            sort($values);  
        }
    
        return response()->json(['sorted_array' => $values]);
    }
    
}
