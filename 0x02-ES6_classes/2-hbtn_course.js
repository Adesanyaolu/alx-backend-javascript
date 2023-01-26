class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
            throw new Error('Invalid input');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new Error('Invalid input');
        }
        this._name = newName;
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new Error('Invalid input');
        }
        this._length = newLength;
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents)) {
            throw new Error('Invalid input');
        }
        this._students = newStudents;
    }
}

const course = new HolbertonCourse('Web Development', 8, ['John','Mike','Emily']);
console.log(course.name); // Output: 'Web Development'
console.log(course.length); // Output: 8
console.log(course.students); // Output: ['John','Mike','Emily']

course.name = 'Data Science';
console.log(course.name); // Output: 'Data Science'

course.length = 10;
console.log(course.length); // Output: 10

course.students = ['Paul', 'David', 'Amy'];
console.log(course.students); // Output: ['Paul', 'David', 'Amy']

