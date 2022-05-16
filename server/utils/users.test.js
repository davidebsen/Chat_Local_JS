const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');
    expect(user.id).toEqual('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('gg');

    expect(user).toBeUndefined()
    expect(users.users.length).toBe(3);
  })

  it('should return name for node course', () => {
    var usersList = users.getUserList('Node Course');

    expect(usersList).toEqual(['Mike', 'Julie']);
  });

  it('should return name for react course', () => {
    var usersList = users.getUserList('React Course');

    expect(usersList).toEqual(['Jen']);
  });
});
