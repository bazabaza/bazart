// current func call by timer environment
(function () {
    var currTime = Date.now();
    printDebug(currTime.toString() + ' / ' + (currTime - prevCallTime).toString() + ' / ' + counter +
        ' / ' + doc_ready_counter);
    counter++;
    prevCallTime = currTime;

});