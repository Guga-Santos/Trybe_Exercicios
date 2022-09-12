class Email {
    private _from: string;
    private _to: string;
    private _subject: string | undefined;
    private _message: string;


    constructor(
        from:string,
        to:string,
        subject:string,
        message:string
    ) {
        this._from = from,
        this._to = to,
        this._subject = subject,
        this._message = message
    }

    set subject(newValue: string) {
        if (newValue.length  <= 40) this._subject = newValue;

        console.log('O subject deve ter menos de 40 caracteres')
    }

    get from() {return this._from} 
    get to() {return this._to}
    get subject() {return this._subject || ''}
    get message() {return this._message}

    get content() {
        return `
        From: ${this._from}
        To: ${this._to}
        Title: ${this._subject}
        Message: ${this._message}`
    }
}

class MailList {
    constructor(private mailList: Email[]= []) {}

    get all(): Email[] { return [...this.mailList]; }

    addEmail (newMail: Email): void { this.mailList.push(newMail); }

    removeEmail(mailToRemove: Email): void {
        this.mailList = this.mailList.filter((mail) => 
        (mail.from !== mailToRemove.from) &&
        (mail.to !== mailToRemove.to) &&
        (mail.subject !== mailToRemove.subject) &&
        (mail.message !== mailToRemove.message));
    }

    getByFrom(mailAdress: string): Email[] {
        return this.mailList.filter((mail) => mail.from === mailAdress);
    }

    getByTo(mailAdress: string): Email[] {
        return this.mailList.filter((mail) => mail.to === mailAdress);
    }

    getBySubject(searchedSubject: string): Email[] {
        return this.mailList.filter((mail) => mail.subject.indexOf(searchedSubject) !== -1);
    }
    
}

// Para testar
const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  'Car wash',
  'There\'s a new car wash in town. Did you know?',
);
const email2 = new Email(
  friendEmail,
  myEmail,
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?',
);
const email3 = new Email(
  myEmail,
  friendEmail,
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth',
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D',
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByFrom(myEmail).forEach(
  (mail) => console.log(mail.content),
);

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we'll have Monday off.
   Want to go to the movies?`,
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getBySubject('Day off').forEach(
  (mail) => console.log(mail.content),
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content),
);

console.log('------ personalMailList.all:');
personalMailList.all.forEach(
  (mail) => console.log(mail.content),
);
