import { GraphQLError } from "graphql";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import LearningFile from "../../entity/LearningFile.js";
import { LearningFileInput, LearningFileUpdateInput } from "./LearningFileInput.js";

@Resolver(LearningFile)
export class LearningFileResolver{

    // Given an id, returns the LearningFile object
    @Query(() => LearningFile, { nullable: true })
    async learningFile(@Arg("id") id: number) {
        let learningFile = new LearningFile();
        learningFile.id = id;
        return await learningFile.readLearningFile();
    }

    // Given LearningFile data, CREATES and returns LearningFile object
    @Mutation(() => LearningFile, { nullable: true })
    async createLearningFile(@Arg("createInput") createInput: LearningFileInput) {
        let learningFile: LearningFile | null = new LearningFile(createInput);
        await learningFile.createLearningFile();
        return await learningFile.readLearningFile();
    }

    // Given LearningFile data and ID, UPDATES and returns LearningFile object
    @Mutation(() => LearningFile||null)
    async updateLearningFile(@Arg("updateInput") updateInput: LearningFileUpdateInput){
        const ACTUAL = new LearningFile(updateInput)
        const OLD = new LearningFile();
        OLD.id = updateInput.id;

        if(!await OLD.readLearningFile()){
            throw new GraphQLError("The Learning File does not exist."); 
        }else{
            await ACTUAL.updateLearningFile();
            return ACTUAL.readLearningFile();   
        }
    }


    // Given an ID, DELETE a LearningFile
    @Mutation(()=> String)
    async deleteLearningFile(@Arg("id")id:number){
        let learningFile: LearningFile | null = new LearningFile();
        learningFile.id = id
        const TEMP = await learningFile.readLearningFile();
        if(!TEMP){
            throw new GraphQLError("The Learning File does not exist."); 
        }else{
            await learningFile.deleteLearningFile();
            return `Learning File ${TEMP.fileName} was deleted`;
        }
    }

}