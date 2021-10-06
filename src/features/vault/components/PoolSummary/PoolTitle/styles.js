const styles = theme => ({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  texts: {
    marginLeft: '20px',
  },
  url: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    '&:hover,&:focus': {
      color: theme.palette.text.secondary,
    },
  },
  icon: {
    color: theme.palette.text.primary,
    marginLeft: '4px',
    marginTop: 4,
    'flex-shrink': 0,
    width: '60px',
    height: '40px',
    '& .MuiAvatarGroup-avatar': {
      border: 'none',
      width: '65%',
      height: '65%',
      '&:first-child': {
        position: 'absolute',
        left: 0,
      },
      '&:last-child': {
        position: 'absolute',
        right: 0,
      },
    },
  },
  btnBoost: {
    marginTop: '8px',
    marginRight: '5px',
    padding: '4px 26px 4px 6px',
    border: 'solid 2px #5a8f69',
    borderRadius: '4px',
    height: '32px',
    whiteSpace: 'nowrap',
    position: 'relative',
    width: '108px',
    display: 'block',
    '& span': {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    '& img': {
      verticalAlign: 'middle',
    },
    '&:hover': {
      backgroundColor: '#5a8f69',
    },
    '&:hover img': {
      filter:
        'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(1000%) contrast(1000%)',
    },
  },
});

export default styles;
