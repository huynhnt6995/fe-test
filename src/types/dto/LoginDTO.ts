import User from "../User";

export default interface LoginDTO {
	user: User; 
	accessToken: string
}
