import { EntityRepository, Repository } from "typeorm";
import { UserCredentials } from "./userCredentials.entity";

@EntityRepository(UserCredentials)
export class UserCredentialsRepository extends Repository<UserCredentials>{}