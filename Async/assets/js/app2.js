let cl = console.log;
// HR Admin will call to candidate
// fail >>...do another call
// success >> first tech interview


// First tech interview 
// fail >> ... msg to HR Admin
// success >> ... Second tech interview


//  Second tech interview >> API 
// fail >> Call HR Admin
// success >> ML tech Interview


// ML tech Interview


function hrAdminCall() {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num >= 5) {
        // .. first tech interview
        cl(`Selected for 1st round`);
        firstTechRound();
    } else {
        throw new Error(`Call to new Candidate for given profile`)
    }
}

function firstTechRound() {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num >= 6) {
        // 
        cl(`candidate is selected for second round`);
        secondTechRound()
    } else {
        throw new Error(`Candidate is failed to pass 1st tech round`)
    }
}

function secondTechRound(){
    let num = Math.floor(Math.random() * 10) + 1;
    if(num >= 6){
        cl(`Candidate is selected for ML Round`);
        mlRound()
    }else{
        throw new Error(`Candidate is failed to pass 2nd tech round`)
    }
}

function mlRound(){
    let num = Math.floor(Math.random() * 10) + 1;
    if(num >= 6){
        cl(`You are slected for Angular Developer Profile, HR will contact you.`)
    }else{
        throw new Error(`Candidate is failed to pass ML round`)
    }
}

hrAdminCall()