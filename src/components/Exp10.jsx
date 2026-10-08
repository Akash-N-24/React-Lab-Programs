import React, { Component } from 'react';

export default class Exp10 extends Component {
  state = { users: [], search: '', loading: false, error: '' };

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      // In a real application this is where a filtered API request could be triggered.
      // The local filtering below keeps the laboratory demo responsive.
    }
  }

  fetchUsers = async () => {
    this.setState({ loading: true, error: '' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Unable to fetch user data.');
      const users = await response.json();
      this.setState({ users, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const filtered = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <section className="lab-program">
        <h1>Program 10: Class Lifecycle + API</h1>
        <p>Uses componentDidMount for the initial API request and componentDidUpdate to respond to state changes.</p>
        <div className="api-controls">
          <input value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} placeholder="Search users" />
          <button onClick={this.fetchUsers}>Refresh</button>
        </div>
        {this.state.loading && <p>Loading…</p>}
        {this.state.error && <p className="error">{this.state.error}</p>}
        <div className="user-list">
          {filtered.map((user) => <article key={user.id}><strong>{user.name}</strong><span>{user.email}</span><small>{user.company.name}</small></article>)}
        </div>
      </section>
    );
  }
}