import { useParams } from 'react-router-dom';
import { TypeDoesNotExistError } from '../../components/errors/type-does-not-exist';
import { FavPickerAcrossGensForType } from '../../components/fav-picker-across-gens-for-type/fav-picker-across-gens-for-type';
import { isPokemonType } from '../../utils/is-pokemon-type-util';

export const FavPickerAcrossGensForTypePage = () => {
  const { type } = useParams<{ type: string }>();

  if (!isPokemonType(type)) {
    return <TypeDoesNotExistError />;
  }
  return <FavPickerAcrossGensForType type={type} />;
};
