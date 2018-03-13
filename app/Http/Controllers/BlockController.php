<?php

namespace App\Http\Controllers;

use App\Models\Carousel as Carousel;
use App\Models\Block as Block;
use App\Models\CarouselDto;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BlockController extends Controller
{
    public function about()
    {
        $blocks= array();
        $blocks =Block::all();

//        echo $carousel;
//        print_r($carousel);
//        return response()->header('Content-Type', )->json("asasasasasasasasasass") ;
//        return $carousel->toArray();

        return $blocks->toArray();
    }


    public function saveCarousel(Request $request)
    {
        $file = $request->file('image');

        //Display File Name
        echo 'File Name: ' . $file->getClientOriginalName();
        echo '<br>';

        //Display File Extension
        echo 'File Extension: ' . $file->getClientOriginalExtension();
        echo '<br>';

        //Display File Real Path
        echo 'File Real Path: ' . $file->getRealPath();
        echo '<br>';

        //Display File Size
        echo 'File Size: ' . $file->getSize();
        echo '<br>';

        //Display File Mime Type
        echo 'File Mime Type: ' . $file->getMimeType();

        //Move Uploaded File
        $destinationPath = 'images';
        $file->move($destinationPath, $file->getClientOriginalName());
    }
}
