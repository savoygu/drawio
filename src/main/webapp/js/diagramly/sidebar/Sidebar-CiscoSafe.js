(function()
{
	// Adds Cisco Safe stencils
	Sidebar.prototype.addCiscoSafePalette = function()
	{
		this.addCiscoSafeArchitecturePalette();
		this.addCiscoSafeCapabilityPalette();
		this.addCiscoSafeDesignPalette();
		this.addCiscoSafeThreatPalette();
	};
	
	Sidebar.prototype.addCiscoSafeArchitecturePalette = function()
	{
		var w = 50;
		var h = 50;
		var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;html=1;fillColor=#6ABD46;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;align=center;' + 
		 	'points=[[0.06,0.06,0],[0.94,0.06,0],[0.94,0.94,0],[0.06,0.94,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];pointerEvents=1;shape=mxgraph.cisco_safe.architecture.';
		var gn = 'mxgraph.cisco_safe.architecture';
		var dt = 'cisco safe architecture';

		this.addPaletteFunctions('cisco_safeArchitecture', 'Cisco Safe / Architecture', false,
		[
			this.createVertexTemplateEntry(s + 'aci_controller;', 
					w, h, '', 'ACI Controller', null, null, this.getTagsForStencil(gn, 'aci controller', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'aci_leaf_switch;', 
					w, h, '', 'ACI Leaf Switch', null, null, this.getTagsForStencil(gn, 'aci leaf switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'aci_spine_switch;', 
					w, h, '', 'ACI Spine Switch', null, null, this.getTagsForStencil(gn, 'aci spine switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'adaptive_security_appliance;', 
					w, h, '', 'Adaptive Security Appliance', null, null, this.getTagsForStencil(gn, 'adaptive security appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'automated_system;', 
					w, h, '', 'Automated System', null, null, this.getTagsForStencil(gn, 'automated system', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'blade_server;', 
					w, h, '', 'Blade Server', null, null, this.getTagsForStencil(gn, 'blade server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'catalyst_switch;', 
					w, h, '', 'Catalyst Switch', null, null, this.getTagsForStencil(gn, 'catalyst switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'corporate_device;', 
					w, h, '', 'Corporate Device', null, null, this.getTagsForStencil(gn, 'corporate device', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'email_security;', 
					w, h, '', 'Email Security', null, null, this.getTagsForStencil(gn, 'email security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'fabric_switch;', 
					w, h, '', 'Fabric Switch', null, null, this.getTagsForStencil(gn, 'fabric switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'firepower_appliance;', 
					w, h, '', 'Firepower Appliance', null, null, this.getTagsForStencil(gn, 'firepower appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'firewall;', 
					w, h, '', 'Firewall', null, null, this.getTagsForStencil(gn, 'firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'generic_appliance;', 
					w, h, '', 'Generic Appliance', null, null, this.getTagsForStencil(gn, 'generic appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'intrusion_detection;', 
					w, h, '', 'Intrusion Detection', null, null, this.getTagsForStencil(gn, 'intrusion detection', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l3_switch;', 
					w, h, '', 'L3 Switch', null, null, this.getTagsForStencil(gn, 'l3 switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'load_balancer;', 
					w, h, '', 'Load Balancer', null, null, this.getTagsForStencil(gn, 'load balancer', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_1kv;', 
					w, h, '', 'Nexus 1kv', null, null, this.getTagsForStencil(gn, 'nexus 1kv', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_data_center_switch;', 
					w, h, '', 'Nexus Data Center Switch', null, null, this.getTagsForStencil(gn, 'nexus data center switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_fabric_switch;', 
					w, h, '', 'Nexus Fabric Switch', null, null, this.getTagsForStencil(gn, 'nexus fabric switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_switch;', 
					w, h, '', 'Nexus Switch', null, null, this.getTagsForStencil(gn, 'nexus switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'phone;', 
					w, h, '', 'Phone', null, null, this.getTagsForStencil(gn, 'phone', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'router;', 
					w, h, '', 'Router', null, null, this.getTagsForStencil(gn, 'router', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'secure_server;', 
					w, h, '', 'Secure Server', null, null, this.getTagsForStencil(gn, 'secure server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'server;', 
					w, h, '', 'Server', null, null, this.getTagsForStencil(gn, 'server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'stacked_switch;', 
					w, h, '', 'Stacked Switch', null, null, this.getTagsForStencil(gn, 'stacked switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'storage;', 
					w, h, '', 'Storage', null, null, this.getTagsForStencil(gn, 'storage', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'switch;', 
					w, h, '', 'Switch', null, null, this.getTagsForStencil(gn, 'switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tls_appliance;', 
					w, h, '', 'TLS Appliance', null, null, this.getTagsForStencil(gn, 'tls appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'unified_access_switch;', 
					w, h, '', 'Unified Access Switch', null, null, this.getTagsForStencil(gn, 'unified access switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_application_firewall;', 
					w, h, '', 'Web Application Firewall', null, null, this.getTagsForStencil(gn, 'web application firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_security;', 
					w, h, '', 'Web Security', null, null, this.getTagsForStencil(gn, 'web security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wide_area_application_engine;', 
					w, h, '', 'Wide Area Application Engine', null, null, this.getTagsForStencil(gn, 'wide area application engine', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_access_point;', 
					w, h, '', 'Wireless Access Point', null, null, this.getTagsForStencil(gn, 'wireless access point', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_lan_controller;', 
					w, h, '', 'Wireless LAN Controller', null, null, this.getTagsForStencil(gn, 'wireless lan controller', dt).join(' '))
		]);
	};
	
	Sidebar.prototype.addCiscoSafeCapabilityPalette = function()
	{
		var w = 50;
		var h = 50;
		var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;html=1;fillColor=#28A8E0;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + 
			'points=[[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.855,0],[0.145,0.855,0],[0.5,0,0], [1,0.5,0], [0.5,1,0],[0,0.5,0]];pointerEvents=1;align=center;shape=mxgraph.cisco_safe.capability.';
		var gn = 'mxgraph.cisco_safe.capability';
		var dt = 'cisco safe capability';

		this.addPaletteFunctions('cisco_safeCapability', 'Cisco Safe / Capability', false,
		[
			this.createVertexTemplateEntry(s + 'access_control_using_trustsec;', 
					w, h, '', 'Access Control Using TrustSec', null, null, this.getTagsForStencil(gn, 'access control using trustsec', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'analysis_correlation', 
					w, h, '', 'Analysis Correlation', null, null, this.getTagsForStencil(gn, 'analysis correlation', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'anomaly_detection;', 
					w, h, '', 'Anomaly Detection', null, null, this.getTagsForStencil(gn, 'anomaly detection', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'anti_malware;', 
					w, h, '', 'Anti-Malware', null, null, this.getTagsForStencil(gn, 'anti malware', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'anti_spam;', 
					w, h, '', 'Anti-Spam', null, null, this.getTagsForStencil(gn, 'anti spam', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'anti_virus;', 
					w, h, '', 'Anti-Virus', null, null, this.getTagsForStencil(gn, 'anti virus', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'application;', 
					w, h, '', 'Application', null, null, this.getTagsForStencil(gn, 'application', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'application_visibility_control;', 
					w, h, '', 'Application Visibility Control', null, null, this.getTagsForStencil(gn, 'application visibility control', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'client_based_security;', 
					w, h, '', 'Client Based Security', null, null, this.getTagsForStencil(gn, 'client based security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cloud_web_security;', 
					w, h, '', 'Cloud Web Security', null, null, this.getTagsForStencil(gn, 'cloud web security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'conference_bridge;', 
					w, h, '', 'Conference Bridge', null, null, this.getTagsForStencil(gn, 'conference bridge', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'database;', 
					w, h, '', 'Database', null, null, this.getTagsForStencil(gn, 'database', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'data_loss_prevention;', 
					w, h, '', 'Data Loss Prevention', null, null, this.getTagsForStencil(gn, 'data loss prevention', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'distributed_denial_of_service_protection;', 
					w, h, '', 'Distributed Denial of Service Protection', null, null, this.getTagsForStencil(gn, 'distributed denial of service protection', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'dns;', 
					w, h, '', 'DNS', null, null, this.getTagsForStencil(gn, 'dns', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'email_encryption;', 
					w, h, '', 'Email Encryption', null, null, this.getTagsForStencil(gn, 'email encryption', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'email_security;', 
					w, h, '', 'Email Security', null, null, this.getTagsForStencil(gn, 'email security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'fabric_switching;', 
					w, h, '', 'Fabric Switching', null, null, this.getTagsForStencil(gn, 'fabric switching', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'firewall;', 
					w, h, '', 'Firewall', null, null, this.getTagsForStencil(gn, 'firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'flow_analytics;', 
					w, h, '', 'Flow Analytics', null, null, this.getTagsForStencil(gn, 'flow analytics', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'identity_authorization;', 
					w, h, '', 'Identity Authorization', null, null, this.getTagsForStencil(gn, 'identity authorization', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'identity_authorization_alt;', 
					w, h, '', 'Identity Authorization (alternative)', null, null, this.getTagsForStencil(gn, 'identity authorization alt alternative', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'intrusion_detection;', 
					w, h, '', 'Intrusion Detection', null, null, this.getTagsForStencil(gn, 'intrusion detection', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'intrusion_prevention;', 
					w, h, '', 'Intrusion Prevention', null, null, this.getTagsForStencil(gn, 'intrusion prevention', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l2_l3_network;', 
					w, h, '', 'L2 L3 Network', null, null, this.getTagsForStencil(gn, 'l2 l3 network', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l2_l3_network_virtual;', 
					w, h, '', 'L2 L3 Network (virtual)', null, null, this.getTagsForStencil(gn, 'l2 l3 network virtual', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l2_switching;', 
					w, h, '', 'L2 Switching', null, null, this.getTagsForStencil(gn, 'l2 switching', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l3_switching;', 
					w, h, '', 'L3 Switching', null, null, this.getTagsForStencil(gn, 'l3 switching', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'load_balancer;', 
					w, h, '', 'Load Balancer', null, null, this.getTagsForStencil(gn, 'load balancer', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'logging_reporting;', 
					w, h, '', 'Logging Reporting', null, null, this.getTagsForStencil(gn, 'logging reporting', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'malware_sandbox;', 
					w, h, '', 'Malware Sandbox', null, null, this.getTagsForStencil(gn, 'malware sandbox', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'mobile_device_manager;', 
					w, h, '', 'Mobile Device Manager', null, null, this.getTagsForStencil(gn, 'mobile device manager', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'monitoring;', 
					w, h, '', 'Monitoring', null, null, this.getTagsForStencil(gn, 'monitoring', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'policy_configuration;', 
					w, h, '', 'Policy Configuration', null, null, this.getTagsForStencil(gn, 'policy configuration', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'posture_assesment;', 
					w, h, '', 'Posture Assesment', null, null, this.getTagsForStencil(gn, 'posture assesment', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'routing;', 
					w, h, '', 'Routing', null, null, this.getTagsForStencil(gn, 'routing', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'server_based_security;', 
					w, h, '', 'Server Based Security', null, null, this.getTagsForStencil(gn, 'server based security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'ssl_tls_offload;', 
					w, h, '', 'SSL TLS Offload', null, null, this.getTagsForStencil(gn, 'ssl tls offload', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'storage;', 
					w, h, '', 'Storage', null, null, this.getTagsForStencil(gn, 'storage', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_intelligence;', 
					w, h, '', 'Threat Intelligence', null, null, this.getTagsForStencil(gn, 'threat intelligence', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'time_synchronization;', 
					w, h, '', 'Time Synchronization', null, null, this.getTagsForStencil(gn, 'time synchronization', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'user;', 
					w, h, '', 'User', null, null, this.getTagsForStencil(gn, 'user', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'video;', 
					w, h, '', 'Video', null, null, this.getTagsForStencil(gn, 'video', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtualized_capability;', 
					w, h, '', 'Virtualized Capability', null, null, this.getTagsForStencil(gn, 'virtualized capability', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtual_firewall;', 
					w, h, '', 'Virtual Firewall', null, null, this.getTagsForStencil(gn, 'virtual firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtual_l2_switching;', 
					w, h, '', 'Virtual L2 Switching', null, null, this.getTagsForStencil(gn, 'virtual l2 switching', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtual_private_network;', 
					w, h, '', 'Virtual Private Network', null, null, this.getTagsForStencil(gn, 'virtual private network vpn', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'voice;', 
					w, h, '', 'Voice', null, null, this.getTagsForStencil(gn, 'voice', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vpn_concentrator;', 
					w, h, '', 'VPN Concentrator', null, null, this.getTagsForStencil(gn, 'vpn concentrator virtual private network', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vulnerability_management;', 
					w, h, '', 'Vulnerability Management', null, null, this.getTagsForStencil(gn, 'vulnerability management', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_application_firewall;', 
					w, h, '', 'Web Application Firewall', null, null, this.getTagsForStencil(gn, 'web application firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_reputation_filtering_dcs;', 
					w, h, '', 'Web Reputation Filtering DCS', null, null, this.getTagsForStencil(gn, 'web reputation filtering dcs', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_security;', 
					w, h, '', 'Web Security', null, null, this.getTagsForStencil(gn, 'web security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_connection;', 
					w, h, '', 'Wireless Connection', null, null, this.getTagsForStencil(gn, 'wireless connection', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_intrusion_detection_system;', 
					w, h, '', 'Wireless Intrusion Detection System', null, null, this.getTagsForStencil(gn, 'wireless intrusion detection system', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_intrusion_prevention_system;', 
					w, h, '', 'Wireless Intrusion Prevention System', null, null, this.getTagsForStencil(gn, 'wireless intrusion prevention system', dt).join(' '))
		]);
	};
	
	Sidebar.prototype.addCiscoSafeDesignPalette = function()
	{
		var w = 50;
		var h = 50;
		var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;html=1;fillColor=#A153A0;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;pointerEvents=1;align=center;' + 
			'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.5,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.5,0],[0.125,0.25,0],[0.125,0.75,0],[0.875,0.25,0],[0.875,0.75,0]];shape=mxgraph.cisco_safe.design.';
		var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;html=1;fillColor=#A153A0;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.';
		var gn = 'mxgraph.cisco_safe.design';
		var dt = 'cisco safe design';

		this.addPaletteFunctions('cisco_safeDesign', 'Cisco Safe / Design', false,
		[
			this.createVertexTemplateEntry(s + 'access_point;', 
					w, h * 0.9, '', 'Access Point', null, null, this.getTagsForStencil(gn, 'access point', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'aci_controller;', 
					w, h * 0.9, '', 'ACI Controller', null, null, this.getTagsForStencil(gn, 'aci controller', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'aci_leaf_switch;', 
					w, h * 0.9, '', 'ACI Leaf Switch', null, null, this.getTagsForStencil(gn, 'aci leaf switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'aci_spine_switch;', 
					w, h * 0.9, '', 'ACI Spine Switch', null, null, this.getTagsForStencil(gn, 'aci spine switch', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'actor_1;', 
					w * 0.47, h, '', 'Actor (female)', null, null, this.getTagsForStencil(gn, 'actor female', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'actor_2;', 
					w * 0.38, h, '', 'Actor (male)', null, null, this.getTagsForStencil(gn, 'actor male', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'adaptive_security_appliance;', 
					w, h * 0.9, '', 'Adaptive Security Appliance', null, null, this.getTagsForStencil(gn, 'adaptive security appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'automated_system;', 
					w, h * 0.9, '', 'Automated System', null, null, this.getTagsForStencil(gn, 'automated system', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'blade_server;', 
					w, h * 0.9, '', 'Blade Server', null, null, this.getTagsForStencil(gn, 'blade server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'blank_device;', 
					w, h * 0.9, '', 'Blank Device', null, null, this.getTagsForStencil(gn, 'blank device', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'blank_service;', 
					w, h * 0.9, '', 'Blank Service', null, null, this.getTagsForStencil(gn, 'blank service', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'call_manager;', 
					w, h * 0.9, '', 'Call Manager', null, null, this.getTagsForStencil(gn, 'call manager', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'catalyst_data_center_switch;', 
					w, h * 0.9, '', 'Catalyst Data Center Switch', null, null, this.getTagsForStencil(gn, 'catalyst data center switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'catalyst_switch_stack;', 
					w, h * 0.9, '', 'Catalyst Switch Stack', null, null, this.getTagsForStencil(gn, 'catalyst switch stack', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cisco_amp;', 
					w, h * 0.9, '', 'Cisco Amp', null, null, this.getTagsForStencil(gn, 'cisco amp amplifier', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cisco_anyconnect;', 
					w, h * 0.9, '', 'Cisco AnyConnect', null, null, this.getTagsForStencil(gn, 'cisco anyconnect', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cisco_cloud_web_security;', 
					w, h * 0.9, '', 'Cisco Cloud Web Security', null, null, this.getTagsForStencil(gn, 'cisco cloud web security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'client_firewall;', 
					w, h * 0.9, '', 'Client Firewall', null, null, this.getTagsForStencil(gn, 'client firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'corporate_device;', 
					w, h * 0.9, '', 'Corporate Device', null, null, this.getTagsForStencil(gn, 'corporate device', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'email_security;', 
					w, h * 0.9, '', 'Email Security', null, null, this.getTagsForStencil(gn, 'email security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'encryption_offload;', 
					w, h * 0.9, '', 'Encryption Offload', null, null, this.getTagsForStencil(gn, 'encryption offload', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'fabric_switch;', 
					w, h * 0.9, '', 'Fabric Switch', null, null, this.getTagsForStencil(gn, 'fabric switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'firepower_appliance;', 
					w, h * 0.9, '', 'Firepower Appliance', null, null, this.getTagsForStencil(gn, 'firepower appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'firewall;', 
					w, h * 0.9, '', 'Firewall', null, null, this.getTagsForStencil(gn, 'firewall', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'intrusion_detection;', 
					w, h * 0.9, '', 'Intrusion Detection', null, null, this.getTagsForStencil(gn, 'intrusion detection', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l2_switch;', 
					w, h * 0.9, '', 'L2 Switch', null, null, this.getTagsForStencil(gn, 'l2 switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'l3_switch;', 
					w, h * 0.9, '', 'L3 Switch', null, null, this.getTagsForStencil(gn, 'l3 switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'load_balancer;', 
					w, h * 0.9, '', 'Load Balancer', null, null, this.getTagsForStencil(gn, 'load balancer', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'mobile_device;', 
					w, h * 0.9, '', 'Mobile Device', null, null, this.getTagsForStencil(gn, 'mobile device', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_1kv;', 
					w, h * 0.9, '', 'Nexus 1kv', null, null, this.getTagsForStencil(gn, 'nexus 1kv', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_data_center_switch;', 
					w, h * 0.9, '', 'Nexus Data Center Switch', null, null, this.getTagsForStencil(gn, 'nexus data center switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_fabric_switch;', 
					w, h * 0.9, '', 'Nexus Fabric Switch', null, null, this.getTagsForStencil(gn, 'nexus fabric switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'nexus_switch;', 
					w, h * 0.9, '', 'Nexus Switch', null, null, this.getTagsForStencil(gn, 'nexus switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'phone;', 
					w, h * 0.9, '', 'Phone', null, null, this.getTagsForStencil(gn, 'phone', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'radware;', 
					w, h * 0.9, '', 'Radware', null, null, this.getTagsForStencil(gn, 'radware', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'router;', 
					w, h * 0.9, '', 'Router', null, null, this.getTagsForStencil(gn, 'router', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'server_1;', 
					w, h * 0.9, '', 'Server', null, null, this.getTagsForStencil(gn, 'server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'server_2;', 
					w, h * 0.9, '', 'Server', null, null, this.getTagsForStencil(gn, 'server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'storage;', 
					w, h * 0.9, '', 'Storage', null, null, this.getTagsForStencil(gn, 'storage', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'user;', 
					w, h, '', 'User', null, null, this.getTagsForStencil(gn, 'user', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'users;', 
					w, h, '', 'Users', null, null, this.getTagsForStencil(gn, 'users', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtual_secure_server;', 
					w, h * 0.9, '', 'Virtual Secure Server', null, null, this.getTagsForStencil(gn, 'virtual secure server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vload_balancer;', 
					w, h * 0.9, '', 'vLoad Balancer', null, null, this.getTagsForStencil(gn, 'vload balancer', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vwaf_security;', 
					w, h * 0.9, '', 'vWAF Security', null, null, this.getTagsForStencil(gn, 'vwaf security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vweb_security;', 
					w, h * 0.9, '', 'vWeb Security', null, null, this.getTagsForStencil(gn, 'vweb security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vwlan_controller;', 
					w, h * 0.9, '', 'vWLAN Controller', null, null, this.getTagsForStencil(gn, 'vwlan controller', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_security;', 
					w, h * 0.9, '', 'Web Security', null, null, this.getTagsForStencil(gn, 'web security', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_corporate_device;', 
					w, h * 0.9, '', 'Wireless Corporate Device', null, null, this.getTagsForStencil(gn, 'wireless corporate device', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wireless_switch;', 
					w, h * 0.9, '', 'Wireless Switch', null, null, this.getTagsForStencil(gn, 'wireless switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wlan_controller;', 
					w, h * 0.9, '', 'WLAN Controller', null, null, this.getTagsForStencil(gn, 'wlan controller', dt).join(' '))
		]);
	};
	
	Sidebar.prototype.addCiscoSafeThreatPalette = function()
	{
		var w = 50;
		var h = 50;
		var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;html=1;fillColor=#F06650;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.threat.';
		var gn = 'mxgraph.cisco_safe.threat';
		var dt = 'cisco safe threat';

		this.addPaletteFunctions('cisco_safeThreat', 'Cisco Safe / Threat', false,
		[
			this.createVertexTemplateEntry(s + 'threat_a1;', 
					w * 0.98, h, '', 'Threat A1', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a2;', 
					w * 0.98, h, '', 'Threat A2', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a3;', 
					w * 0.98, h, '', 'Threat A3', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a4;', 
					w * 0.98, h, '', 'Threat A4', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a5;', 
					w * 0.98, h, '', 'Threat A5', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a6;', 
					w * 0.98, h, '', 'Threat A6', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a7;', 
					w * 0.98, h, '', 'Threat A7', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_a8;', 
					w * 0.98, h, '', 'Threat A8', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b1;', 
					w * 0.63, h, '', 'Threat B1', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b2;', 
					w * 0.63, h, '', 'Threat B2', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b3;', 
					w * 0.63, h, '', 'Threat B3', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b4;', 
					w * 0.63, h, '', 'Threat B4', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b5;', 
					w * 0.63, h, '', 'Threat B5', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b6;', 
					w * 0.63, h, '', 'Threat B6', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b7;', 
					w * 0.63, h, '', 'Threat B7', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_b8;', 
					w * 0.63, h, '', 'Threat B8', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c1;', 
					w, h * 0.81, '', 'Threat C1', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c2;', 
					w, h * 0.81, '', 'Threat C2', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c3;', 
					w, h * 0.81, '', 'Threat C3', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c4;', 
					w, h * 0.81, '', 'Threat C4', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c5;', 
					w, h * 0.81, '', 'Threat C5', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c6;', 
					w, h * 0.81, '', 'Threat C6', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c7;', 
					w, h * 0.81, '', 'Threat C7', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_c8;', 
					w, h * 0.81, '', 'Threat C8', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d1;', 
					w * 0.93, h, '', 'Threat D1', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d2;', 
					w * 0.93, h, '', 'Threat D2', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d3;', 
					w * 0.93, h, '', 'Threat D3', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d4;', 
					w * 0.93, h, '', 'Threat D4', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d5;', 
					w * 0.93, h, '', 'Threat D5', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d6;', 
					w * 0.93, h, '', 'Threat D6', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d7;', 
					w * 0.93, h, '', 'Threat D7', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_d8;', 
					w * 0.93, h, '', 'Threat D8', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e1;', 
					w, h * 0.94, '', 'Threat E1', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e2;', 
					w, h * 0.94, '', 'Threat E2', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e3;', 
					w, h * 0.94, '', 'Threat E3', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e4;', 
					w, h * 0.94, '', 'Threat E4', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e5;', 
					w, h * 0.94, '', 'Threat E5', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e6;', 
					w, h * 0.94, '', 'Threat E6', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e7;', 
					w, h * 0.94, '', 'Threat E7', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'threat_e8;', 
					w, h * 0.94, '', 'Threat E8', null, null, this.getTagsForStencil(gn, 'threat', dt).join(' '))
		]);
	};
	
	
	
})();
