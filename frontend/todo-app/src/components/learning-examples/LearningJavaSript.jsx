const person ={
    name:'Range',
    address:{
        line1: '123 baker street',
        city: 'london',
        country:'uk',

    },
    profiles:['twitter','linkedin','Instagram'],
    printProfile: () => {
        person.profiles.map((profile) => {
          console.log(profile);
        });
      }
}


export default function LearningJavaSript(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
         <dialog>{person.printProfile()}</dialog>
        </>
    )
}