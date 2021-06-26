import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliments";

@EntityRepository(Compliment)
class CopmplimentsRepositories extends Repository<Compliment>{}

export { CopmplimentsRepositories};