import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors.js';
import { List, Li, Span, Wrap, Delete } from './ContactListStyles.js';
import { deleteContact } from 'redux/operations.js';

const ContactList = () => {
  const dispatch = useDispatch();

  const persons = useSelector(selectVisibleContacts);

  return (
    <List>
      {persons.map(person => (
        <Li key={person.id}>
          <Wrap>
            <Span>
              <Span>{person.name}</Span>
              <Span>:{person.number}</Span>
              <Span>
                <Delete onClick={e => dispatch(deleteContact(person.id))}>
                  Delete
                </Delete>
              </Span>
            </Span>
          </Wrap>
        </Li>
      ))}
    </List>
  );
};

export { ContactList };
