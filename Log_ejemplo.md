::1 - - [17/Nov/2020:04:06:09 +0000] "OPTIONS /registerVoter HTTP/1.1" 204 0 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
req.body: 
{ voterId: '456',
  registrarId: '456',
  firstName: 'Prueba1',
  lastName: 'ProbandoApp1' }
registrarId
456
voterId 
456
Wallet path: /home/miguel/evote/web-app/server/wallet
FileSystemWallet {
  storesInitialized: false,
  walletMixin: X509WalletMixin {},
  path: '/home/miguel/evote/web-app/server/wallet' }
::1 - - [17/Nov/2020:04:06:09 +0000] "POST /registerVoter HTTP/1.1" - - "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
AdminIdentity: + {"name":"admin","mspid":"Org1MSP","roles":null,"affiliation":"","enrollmentSecret":"","enrollment":{"signingIdentity":"dd0fd816ad2f483382d3a9da4eb1b730e77b7ec88d111f785c2d9eb79879be71","identity":{"certificate":"-----BEGIN CERTIFICATE-----\nMIICVDCCAfugAwIBAgIUPiTB6kiWRxBNmqO/VLwbxjR+3jQwCgYIKoZIzj0EAwIw\nfzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\nbiBGcmFuY2lzY28xHzAdBgNVBAoTFkludGVybmV0IFdpZGdldHMsIEluYy4xDDAK\nBgNVBAsTA1dXVzEUMBIGA1UEAxMLZXhhbXBsZS5jb20wHhcNMjAxMTE3MDMyMzAw\nWhcNMjExMDExMTkzMTAwWjBdMQswCQYDVQQGEwJVUzEXMBUGA1UECBMOTm9ydGgg\nQ2Fyb2xpbmExFDASBgNVBAoTC0h5cGVybGVkZ2VyMQ8wDQYDVQQLEwZjbGllbnQx\nDjAMBgNVBAMTBWFkbWluMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEW1heK1Cb\nj9PhKMbjP9r/8p3IxDj/PylNJC+Mve+F/FUqgD8vUPhos3ChsOmIrcJupq5e2ZUL\nW+xLXJhUDCKT2KN3MHUwDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwHQYD\nVR0OBBYEFH44p7/nbQKfUbg6IsL+gN8nrUAyMB8GA1UdIwQYMBaAFBdnQj2qnoI/\nxMUdn1vDmdG1nEgQMBUGA1UdEQQOMAyCCmthbWUtaG91c2UwCgYIKoZIzj0EAwID\nRwAwRAIgbMjgazIl4SaGjIH3zim3ulrGwvFA0BBD2J5Js+nN+xUCIDwD0MpDOiyg\nziZqXPc+0vQ0orlD/vV8SuubmWFZ/Ar9\n-----END CERTIFICATE-----"}}}
Successfully registered voter Prueba1 ProbandoApp1. Use voterId 456 to login above.
response from registerVoter: 
Successfully registered voter Prueba1 ProbandoApp1. Use voterId 456 to login above.
req.body.voterId
456
Wallet path: /home/miguel/evote/web-app/server/wallet
userName: 
456
wallet: 
FileSystemWallet {
  storesInitialized: false,
  walletMixin: X509WalletMixin {},
  path: '/home/miguel/evote/web-app/server/wallet' }
ccp: 
{ certificateAuthorities: { Org1CA: { caName: 'ca', url: 'http://localhost:17050' } },
  client:
   { connection: { timeout: [Object] }, organization: 'Org1MSP' },
  name: 'Org1',
  organizations:
   { Org1MSP:
      { certificateAuthorities: [Array],
        mspid: 'Org1MSP',
        peers: [Array] } },
  peers: { Org1Peer1: { url: 'grpc://localhost:17051' } },
  version: '1.0.0' }
before gateway.connect: 
Connected to mychannel. 
Done connecting to network.
networkobj: 
{ contract:
   Contract {
     network:
      Network {
        gateway: [Gateway],
        channel: [Channel],
        contracts: [Map],
        initialized: true,
        listeners: Map {},
        queryHandler: [SingleQueryHandler],
        checkpointer: [Object],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        eventHubManager: [EventHubManager] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     chaincodeId: 'voterContract',
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     namespace: '',
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} } },
  network:
   Network {
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     contracts: Map { 'voterContract:' => [Contract] },
     initialized: true,
     listeners: Map {},
     queryHandler: SingleQueryHandler { _peers: [Array], _currentPeerIndex: 0 },
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} },
     eventHubSelectionStrategy:
      RoundRobinEventHubSelectionStrategy { peers: [Array], lastPeerIdx: null },
     eventHubManager:
      EventHubManager {
        channel: [Channel],
        eventHubFactory: [EventHubFactory],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        newEventHubs: [] } },
  gateway:
   Gateway {
     client:
      Client {
        _cryptoSuite: [CryptoSuite_ECDSA_AES],
        _clientConfigMspid: 'Org1MSP',
        _stateStore: [FileKeyValueStore],
        _userContext: [User],
        _network_config: [NetworkConfig_1_0],
        _msps: Map {},
        _devMode: false,
        _adminSigningIdentity: null,
        _tls_mutual: [Object],
        _organizations: Map {},
        _certificateAuthorities: Map {},
        _channels: [Map],
        _connection_options: {} },
     wallet: null,
     networks: Map { 'mychannel' => [Network] },
     options:
      { queryHandlerOptions: [Object],
        eventHandlerOptions: [Object],
        discovery: [Object],
        checkpointer: [Object],
        eventHubSelectionOptions: [Object],
        wallet: [FileSystemWallet],
        identity: '456' },
     currentIdentity:
      User {
        _name: '456',
        _roles: null,
        _affiliation: '',
        _enrollmentSecret: '',
        _identity: [Identity],
        _signingIdentity: [SigningIdentity],
        _mspId: 'Org1MSP',
        _cryptoSuite: [CryptoSuite_ECDSA_AES] } } }
network obj
{ contract:
   Contract {
     network:
      Network {
        gateway: [Gateway],
        channel: [Channel],
        contracts: [Map],
        initialized: true,
        listeners: Map {},
        queryHandler: [SingleQueryHandler],
        checkpointer: [Object],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        eventHubManager: [EventHubManager] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     chaincodeId: 'voterContract',
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     namespace: '',
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} } },
  network:
   Network {
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     contracts: Map { 'voterContract:' => [Contract] },
     initialized: true,
     listeners: Map {},
     queryHandler: SingleQueryHandler { _peers: [Array], _currentPeerIndex: 0 },
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} },
     eventHubSelectionStrategy:
      RoundRobinEventHubSelectionStrategy { peers: [Array], lastPeerIdx: null },
     eventHubManager:
      EventHubManager {
        channel: [Channel],
        eventHubFactory: [EventHubFactory],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        newEventHubs: [] } },
  gateway:
   Gateway {
     client:
      Client {
        _cryptoSuite: [CryptoSuite_ECDSA_AES],
        _clientConfigMspid: 'Org1MSP',
        _stateStore: [FileKeyValueStore],
        _userContext: [User],
        _network_config: [NetworkConfig_1_0],
        _msps: Map {},
        _devMode: false,
        _adminSigningIdentity: null,
        _tls_mutual: [Object],
        _organizations: Map {},
        _certificateAuthorities: Map {},
        _channels: [Map],
        _connection_options: {} },
     wallet: null,
     networks: Map { 'mychannel' => [Network] },
     options:
      { queryHandlerOptions: [Object],
        eventHandlerOptions: [Object],
        discovery: [Object],
        checkpointer: [Object],
        eventHubSelectionOptions: [Object],
        wallet: [FileSystemWallet],
        identity: '456' },
     currentIdentity:
      User {
        _name: '456',
        _roles: null,
        _affiliation: '',
        _enrollmentSecret: '',
        _identity: [Identity],
        _signingIdentity: [SigningIdentity],
        _mspId: 'Org1MSP',
        _cryptoSuite: [CryptoSuite_ECDSA_AES] } } }
inside invoke
isQuery: false, func: createVoter, args: {"voterId":"456","registrarId":"456","firstName":"Prueba1","lastName":"ProbandoApp1"}
{ contract:
   Contract {
     network:
      Network {
        gateway: [Gateway],
        channel: [Channel],
        contracts: [Map],
        initialized: true,
        listeners: Map {},
        queryHandler: [SingleQueryHandler],
        checkpointer: [Object],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        eventHubManager: [EventHubManager] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     chaincodeId: 'voterContract',
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     namespace: '',
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} } },
  network:
   Network {
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     contracts: Map { 'voterContract:' => [Contract] },
     initialized: true,
     listeners: Map {},
     queryHandler: SingleQueryHandler { _peers: [Array], _currentPeerIndex: 0 },
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} },
     eventHubSelectionStrategy:
      RoundRobinEventHubSelectionStrategy { peers: [Array], lastPeerIdx: null },
     eventHubManager:
      EventHubManager {
        channel: [Channel],
        eventHubFactory: [EventHubFactory],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        newEventHubs: [] } },
  gateway:
   Gateway {
     client:
      Client {
        _cryptoSuite: [CryptoSuite_ECDSA_AES],
        _clientConfigMspid: 'Org1MSP',
        _stateStore: [FileKeyValueStore],
        _userContext: [User],
        _network_config: [NetworkConfig_1_0],
        _msps: Map {},
        _devMode: false,
        _adminSigningIdentity: null,
        _tls_mutual: [Object],
        _organizations: Map {},
        _certificateAuthorities: Map {},
        _channels: [Map],
        _connection_options: {} },
     wallet: null,
     networks: Map { 'mychannel' => [Network] },
     options:
      { queryHandlerOptions: [Object],
        eventHandlerOptions: [Object],
        discovery: [Object],
        checkpointer: [Object],
        eventHubSelectionOptions: [Object],
        wallet: [FileSystemWallet],
        identity: '456' },
     currentIdentity:
      User {
        _name: '456',
        _roles: null,
        _affiliation: '',
        _enrollmentSecret: '',
        _identity: [Identity],
        _signingIdentity: [SigningIdentity],
        _mspId: 'Org1MSP',
        _cryptoSuite: [CryptoSuite_ECDSA_AES] } } }
notQuery
notQuery, args
$$$$$$$$$$$$$ args: 
[ '{"voterId":"456","registrarId":"456","firstName":"Prueba1","lastName":"ProbandoApp1"}' ]
createVoter
object
{ voterId: '456',
  registrarId: '456',
  firstName: 'Prueba1',
  lastName: 'ProbandoApp1' }
'{"voterId":"456","registrarId":"456","firstName":"Prueba1","lastName":"ProbandoApp1"}'
before submit
{ contract:
   Contract {
     network:
      Network {
        gateway: [Gateway],
        channel: [Channel],
        contracts: [Map],
        initialized: true,
        listeners: Map {},
        queryHandler: [SingleQueryHandler],
        checkpointer: [Object],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        eventHubManager: [EventHubManager] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     chaincodeId: 'voterContract',
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     namespace: '',
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} } },
  network:
   Network {
     gateway:
      Gateway {
        client: [Client],
        wallet: null,
        networks: [Map],
        options: [Object],
        currentIdentity: [User] },
     channel:
      Channel {
        _name: 'mychannel',
        _channel_peers: [Map],
        _anchor_peers: [],
        _orderers: [Map],
        _kafka_brokers: [],
        _clientContext: [Client],
        _msp_manager: [MSPManager],
        _discovery_interests: [Map],
        _discovery_results: [Object],
        _last_discover_timestamp: 1605585970891,
        _use_discovery: true,
        _as_localhost: true,
        _endorsement_handler: [DiscoveryEndorsementHandler],
        _commit_handler: [BasicCommitHandler],
        _last_refresh_request: [Object] },
     contracts: Map { 'voterContract:' => [Contract] },
     initialized: true,
     listeners: Map {},
     queryHandler: SingleQueryHandler { _peers: [Array], _currentPeerIndex: 0 },
     checkpointer:
      { factory: [Function: FILE_SYSTEM_CHECKPOINTER], options: {} },
     eventHubSelectionStrategy:
      RoundRobinEventHubSelectionStrategy { peers: [Array], lastPeerIdx: null },
     eventHubManager:
      EventHubManager {
        channel: [Channel],
        eventHubFactory: [EventHubFactory],
        eventHubSelectionStrategy: [RoundRobinEventHubSelectionStrategy],
        newEventHubs: [] } },
  gateway:
   Gateway {
     client:
      Client {
        _cryptoSuite: [CryptoSuite_ECDSA_AES],
        _clientConfigMspid: 'Org1MSP',
        _stateStore: [FileKeyValueStore],
        _userContext: [User],
        _network_config: [NetworkConfig_1_0],
        _msps: Map {},
        _devMode: false,
        _adminSigningIdentity: null,
        _tls_mutual: [Object],
        _organizations: Map {},
        _certificateAuthorities: Map {},
        _channels: [Map],
        _connection_options: {} },
     wallet: null,
     networks: Map { 'mychannel' => [Network] },
     options:
      { queryHandlerOptions: [Object],
        eventHandlerOptions: [Object],
        discovery: [Object],
        checkpointer: [Object],
        eventHubSelectionOptions: [Object],
        wallet: [FileSystemWallet],
        identity: '456' },
     currentIdentity:
      User {
        _name: '456',
        _roles: null,
        _affiliation: '',
        _enrollmentSecret: '',
        _identity: [Identity],
        _signingIdentity: [SigningIdentity],
        _mspId: 'Org1MSP',
        _cryptoSuite: [CryptoSuite_ECDSA_AES] } } }
after submit
<Buffer 22 76 6f 74 65 72 20 77 69 74 68 20 76 6f 74 65 72 49 64 20 34 35 36 20 69 73 20 75 70 64 61 74 65 64 20 69 6e 20 74 68 65 20 77 6f 72 6c 64 20 73 74 ... >
Transaction createVoter with args {"voterId":"456","registrarId":"456","firstName":"Prueba1","lastName":"ProbandoApp1"} has been submitted
after network.invoke 
