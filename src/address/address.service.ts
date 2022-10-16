import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './/entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  create(createAddressDto: CreateAddressDto) {
    return this.addressRepository.save(createAddressDto);
  }

  findAll() {
    return this.addressRepository.find();
  }

  findOne(id: number) {
    return this.addressRepository.findOneBy({ id: id });
  }

  finduserIDAddr(userID: number): Promise<Address[]> {
    return this.addressRepository.findBy({ user_id: userID });
  }

  async update(updateAddressDto: UpdateAddressDto) {
    await this.addressRepository.update(updateAddressDto.id, updateAddressDto);
    return updateAddressDto;
  }

  async remove(id: number) {
    return await this.addressRepository.delete(id);
  }
}
