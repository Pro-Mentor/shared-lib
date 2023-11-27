/**
 * StudentCreate interface.
 */
interface StudentCreate {
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    personalEmail?: string;
    studentClass?: string[];
    degreeProgram?: string[];
    school?: string[];
}

export { StudentCreate };