<?php
namespace App\Observers;

use App\documents;

class documentsObserver
{
    
    /**
     * Listen to the documents creating event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function creating(documents $documents)
    {
        //code...
    }

     /**
     * Listen to the documents created event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function created(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents updating event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function updating(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents updated event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function updated(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents saving event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function saving(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents saved event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function saved(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents deleting event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function deleting(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents deleted event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function deleted(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents restoring event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function restoring(documents $documents)
    {
        //code...
    }

    /**
     * Listen to the documents restored event.
     *
     * @param  documents  $documents
     * @return void
     */
    public function restored(documents $documents)
    {
        //code...
    }
}