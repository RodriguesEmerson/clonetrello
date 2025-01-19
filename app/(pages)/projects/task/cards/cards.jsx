import { editingCardStore } from '../zustand/editingCardStore';
import { Card } from './../card/card';

export const Cards = () => {
   const editingCard = editingCardStore(state => state.editingCard);
   const cards = [editingCard];
   return (
      cards.map(card => (
         <Card key={card.id}  card={card} />
      ))
   );
}