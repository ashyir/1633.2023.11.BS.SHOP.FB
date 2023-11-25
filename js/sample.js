// Variable Examples.
let a1 = 1;
let a2 = 2;
let a = [1, 2, 'a', [2, 'a']];
console.log(a[2]);
a[2] = [2, 4];
console.log(a[2]);

let p_name = 'Trung';
let p_school = 'Greenwich';
let p_email = 'trung@greenwich.edu.vn';
let p_phone = '04324236564';

let person = {
    'name': 'Trung',
    'school': 'Greenwich',
    'email': 'trung@greenwich.edu.vn',
    'phone': '04324236564'
};

console.log(person.name);
person.name = 'ABC';
console.log(person.name);

let persons = [
    {
        'name': 'Trung',
        'school': 'Greenwich',
        'email': 'trung@greenwich.edu.vn',
        'phone': '04324236564',
    },
    {
        'name': 'Anh',
        'school': 'Greenwich',
        'email': 'anh@greenwich.edu.vn',
        'phone': '04535654767',
    }
];

console.log(persons[0]);
console.log(persons[0].name);

persons[0] = {
    'name': 'Other',
    'school': 'Greenwich',
    'email': 'other@greenwich.edu.vn',
    'phone': '123',
};

console.log(persons[0]);
console.log(persons[0].name);

persons[0].name = 'Another Other';
console.log(persons[0].name);
// End Variable Examples.