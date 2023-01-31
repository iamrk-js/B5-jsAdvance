let cl = console.log;

const hrAdminCall = (fti, cbFun2,cbFun3) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1
        if (num >= 3) {
            cl(`candidate is selected for 1st Round`);
            fti(cbFun2, cbFun3);
        } else {
            throw new Error(`call for new candidate`)
        }
    }, 3000);
}


const firstTechInt = (sti, mltr) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        if(num >= 3){
            cl(`Candidate is selected for 2nd Round`);
            sti(mltr)
        }else{
            throw new Error(`Candidate is  failed to pass 1st Round`)
        }
    }, 2000);
}


const sencondTechInt = (cbFun) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        if(num >= 2){
            cl(`Candidate is selected for ML Round`);
            cbFun();
        }else{
            throw new Error(`Candidate is  failed to pass 2nd Round`)
        }
    }, 1000);
}


function mLRound(){
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        if(num >= 6){
            cl(`Hr will get back to you very Soon`);
        }else{
            throw new Error(`Candidate is  failed to pass ML Round`)
        }
    }, 500);
}





hrAdminCall(firstTechInt,sencondTechInt, mLRound);
// firstTechInt();
// sencondTechInt();