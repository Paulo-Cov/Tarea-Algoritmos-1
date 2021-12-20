function dosMenores( arr, arr_size)
{
    let i, first, second;
    /* Tener al menos dos elementos */
    if (arr_size < 2)
    {
        document.write(" Valores invalidos ");
        return;
    }
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < arr_size ; i ++)
    {
        /* If current element is smaller than first
        then update both first and second */
        if (arr[i] < first)
        {
            second = first;
            first = arr[i];
        }
        /* If arr[i] is in between first and second
        then update second */
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE )
        document.write("There is no second smallest element\n");
    else
        document.write("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}
    // Driver program
    let arr = [ 12, 13, 1, 10, 34, 1 ];
    let n = arr.length;
    print2Smallest(arr, n);