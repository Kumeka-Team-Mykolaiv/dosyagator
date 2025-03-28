export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getTasksList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'setGreeting' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
