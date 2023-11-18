/**
 * lecturer create interface
 */
interface LecturerCreate {
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    personalEmail?: string;
}

export { LecturerCreate };