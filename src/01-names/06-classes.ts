(()=>{

    type  Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person{
        
        public lastAccess: Date;

        constructor(
            public email:string,
            public rol:string,
            name: string,
            gender: Gender,
            birthdate: Date,

        ){
            super( name , gender , birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory:string,
            public lastOpenFolder:string,
            email : string,
            rol : string,
            name :  string,
            gender :  Gender,
            birthdate :  Date,
        ){
            super(
                email,
                rol,
                name,
                gender,
                birthdate,
            );
        }

    }

    const userSetting = new UserSettings(
        '/pda/deskopt/home',
        'pda/desktop/lastopen',
        'lazamh@hotmail.com',
        'admin',
        'Roger',
        'M',
        new Date('1999-10-19')
    )

    console.log({userSetting})
    
})()