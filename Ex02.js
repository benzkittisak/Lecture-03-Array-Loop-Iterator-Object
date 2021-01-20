let furniture = ['Table','Chairs','Couch']

function Letter(arr1){
    let index =0 ;
    while(index < arr1.length){
        console.log(`************${arr1[index]}************`)
        for (const char of arr1[index]) {
            console.log(char)
        }
        index++;
        console.log("");
    }
}
Letter(furniture)