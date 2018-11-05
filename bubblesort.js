let counter = 0;

function bubbleSort(anArr){
    let originalArray = anArr.slice();

    if(anArr.length===0){
        return anArr;
    }
    for(let i=0;i<anArr.length;i++){
        let current = anArr[0];
        for(let j=0;j<anArr.length;j++){
            if(current===anArr[j]){
                continue;
            }
            else{
                if(current<anArr[j]){
                    current=anArr[j];
                }
                else{
                    let temp = anArr[j];
                    anArr[j]=current;
                    anArr[j-1]=temp;
                    current = anArr[j];
                }
            }
        }
        let truth = true;
        for (let j = 0; j < anArr.length ;j++) {
            if(anArr[j] !== originalArray[j]) {
                truth = false;
            } 
        }
        if (truth) {
            return anArr;
        }
    }
    return anArr;
}