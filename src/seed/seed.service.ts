import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async execusteSeed() {
    try {
      await this.pokemonModel.deleteMany({});

      const data = await this.http.get<PokeResponse>(
        'https://pokeapi.co/api/v2/pokemon/?limit=650',
      );

      const pokeArray = data.results.map(({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];

        return { name, no };
      });
      // if (pokeArray.length > 0) await this.pokemonModel.insertMany(pokeArray);
      if (pokeArray.length > 0) await this.pokemonModel.create(pokeArray);
    } catch (error) {
      throw new InternalServerErrorException(`seed failed`);
    }

    return 'seed executed';
  }
}
