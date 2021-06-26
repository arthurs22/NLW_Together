// Repository is just like EntityManager but its operations are limited to a concrete entity.

// You can access repository via getRepository(Entity), Connection#getRepository, or EntityManager#getRepository.

// //
// Repository - Regular repository for any entity.
// TreeRepository - Repository, extensions of Repository used for tree-entities (like entities marked with @Tree decorator). Has special methods to work with tree structures.
// MongoRepository - Repository with special functions used only with MongoDB.
// //


import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRepositories extends Repository<User> {};

export { UserRepositories };