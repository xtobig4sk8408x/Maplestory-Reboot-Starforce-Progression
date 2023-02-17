import React from 'react';

const AdminDashboard = ({ user }) => {
    return ( 
        <div>
            {user.role === 'admin' ? (
                <header>Welcome, Admin!</header>
            ) : (
                <header>Sorry, you don't have access to this page</header>
            )}
        </div>
    );
}

export default AdminDashboard;