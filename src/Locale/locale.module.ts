import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RegionController } from './controllers/region.controller';
import { RegionService } from './services/region.service';
import { Region, RegionSchema } from './models/region.schema';

import { StateController } from './controllers/state.controller';
import { StateService } from './services/state.service';
import { State, StateSchema } from './models/state.schema';

import { LGAController } from './controllers/lga.controller';
import { LGAService } from './services/lga.service';
import { LGA, LGASchema } from './models/lga.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Region.name, schema: RegionSchema }]),
    MongooseModule.forFeature([{ name: State.name, schema: StateSchema }]),
    MongooseModule.forFeature([{ name: LGA.name, schema: LGASchema }]),
    AuthModule,
  ],
  controllers: [RegionController, StateController, LGAController],
  providers: [RegionService, StateService, LGAService],
  exports: [RegionService, StateService, LGAService],
})
export class LocaleModule {}
