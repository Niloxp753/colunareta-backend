import { PartialType } from '@nestjs/swagger';
import { CreateFollowUpDto } from './create-followUp.dto';

export class UpdateFollowUpDto extends PartialType(CreateFollowUpDto) {}
