import "./UserTableHead.css";

const UserTableHead = () => {
  return (
    <div className="user_table_header">
      <h3 className="header_item">Candidate</h3>
      <h3 className="header_item">Referred</h3>
      <h3 className="header_item">Interviewed</h3>
      <h3 className="header_item">Hired</h3>
      <h3 className="header_item">Joined</h3>
      <h3 className="header_item">Reward</h3>
    </div>
  );
};

export default UserTableHead;
