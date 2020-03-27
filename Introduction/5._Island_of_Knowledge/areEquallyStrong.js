function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var myArms = [yourLeft, yourRight];
    var friendsArms = [friendsLeft, friendsRight];

    var isEquallyStrongLeft = false;
    var isEquallyStrongRigth = false;

    var isLeft = true;

    myArms.forEach(myarm => {
        for(var i = 0; i < friendsArms.length; i++) {
            if(myarm == friendsArms[i])
            {
                if(isLeft){
                    isEquallyStrongLeft = true; 
                    break;
                }
                else {
                    isEquallyStrongRigth = true;
                    break;
                }
            }
            else
            {
                if(i == friendsArms.length -1) {
                    if(isLeft) {
                        isEquallyStrongLeft = false;
                    }
                    else{
                        isEquallyStrongRigth = false;
                    }
                }
            }
        }

        isLeft = false;
    })


    return isEquallyStrongLeft && isEquallyStrongRigth;
}

areEquallyStrong(1,10,10,0);