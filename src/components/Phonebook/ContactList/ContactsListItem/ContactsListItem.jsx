import PropTypes from 'prop-types';

// import styles from './contactsListItem.module.scss';

const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button id={id} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;


ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
