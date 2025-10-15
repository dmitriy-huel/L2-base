function ipv4Parser(ip, subnetMask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = subnetMask.split('.').map(Number);
    
    const networkParts = [];
    for (let i = 0; i < 4; i++) {
        networkParts.push(ipParts[i] & maskParts[i]);
    }
  
    const hostParts = [];
    for (let i = 0; i < 4; i++) {
        hostParts.push(ipParts[i] & ~maskParts[i]);
    }
    
    const networkBlock = networkParts.join('.');
    const hostIdentifier = hostParts.join('.');
    
    return [networkBlock, hostIdentifier];
}

const result = ipv4Parser('192.168.2.1', '255.255.255.0');
console.log('Network block:', result[0]);
console.log('Host identifier:', result[1]);