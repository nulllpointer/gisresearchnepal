<?php
namespace App\Observers;

use App\notices;

class noticesObserver
{
    
    /**
     * Listen to the notices creating event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function creating(notices $notices)
    {
        //code...
    }

     /**
     * Listen to the notices created event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function created(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices updating event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function updating(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices updated event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function updated(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices saving event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function saving(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices saved event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function saved(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices deleting event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function deleting(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices deleted event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function deleted(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices restoring event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function restoring(notices $notices)
    {
        //code...
    }

    /**
     * Listen to the notices restored event.
     *
     * @param  notices  $notices
     * @return void
     */
    public function restored(notices $notices)
    {
        //code...
    }
}