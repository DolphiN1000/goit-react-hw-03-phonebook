import PropTypes from 'prop-types';

import styles from './contactList.module.scss';

const ContactsList = ({ contacts, deleteContact }) => {
  const contactsSorted = contacts.sort(function (a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  const contactsList = contactsSorted.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button id={id} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return <ol className={styles.list}> {contactsList}</ol>;
};

export default ContactsList;

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
