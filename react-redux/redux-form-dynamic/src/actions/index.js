export const SUBMIT_DATA = 'SUBMIT_DATA';

export function submitData(props) {

  console.log(SUBMIT_DATA, props);

  return {
      type: SUBMIT_DATA,
      payload: props
  };
}
