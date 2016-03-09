var styles={
  appContainer: {
    width: '100%',
    height: '92%'
  },
  homeContainer: {
    backgroundSize: 'cover',
    backgroundImage: "url('/app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: '5px'
  },
  toolbarTitle: {
    margin: 0
  },
  toolbarSearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    alignSelf: 'right'        
  },
  homeSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    alignSelf: 'right'
  },
  getWeatherButton: {
    margin: '10px'
  },
  homeTitle: {
    fontSize: '45px',
    color: '#fff',
    fontWeight: '100'
  }
}

module.exports = styles;