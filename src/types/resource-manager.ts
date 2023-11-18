/**
 * resource manager create type
 */
interface ResourceManagerCreate {
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
}

export { ResourceManagerCreate };