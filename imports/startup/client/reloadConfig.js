import { Reloader } from 'meteor/jamielob/reloader';

Reloader.configure({
    check: 'everyStart', // Check for new code every time the app starts
    checkTimer: 3000,  // Wait 3 seconds to see if new code is available
    refresh: 'startAndResume', // Refresh to already downloaded code on both start and resume
    idleCutoff: 1000 * 60 * 10  // Wait 10 minutes before treating a resume as a start
});
