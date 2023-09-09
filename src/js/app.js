export default function getSpecialAttack(character) {
  const specialAttack = [];

  character.special.forEach((num) => {
    const {
      name, id, icon, description = 'Описание недоступно',
    } = num;

    specialAttack.push({
      name, id, icon, description,
    });
  });

  return specialAttack;
}
