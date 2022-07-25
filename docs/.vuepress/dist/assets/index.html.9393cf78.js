import{_ as e,o as n,c as i,e as d}from"./app.51557db6.js";const a={},s=d(`<h1 id="dell-\u7F51\u7EDC\u4EA4\u6362\u673A-\u57FA\u672C\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#dell-\u7F51\u7EDC\u4EA4\u6362\u673A-\u57FA\u672C\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> DELL \u7F51\u7EDC\u4EA4\u6362\u673A \u57FA\u672C\u914D\u7F6E\u8BF4\u660E</h1><h2 id="\u914D\u7F6E\u8D26\u53F7\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8D26\u53F7\u5BC6\u7801" aria-hidden="true">#</a> \u914D\u7F6E\u8D26\u53F7\u5BC6\u7801</h2><p>Dell \u9ED8\u8BA4\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u90FD\u662F admin\uFF0C\u5982\u679C\u5E0C\u671B\u4FEE\u6539\u6216\u6DFB\u52A0\u65B0\u7684\u7528\u6237</p><p>\u8D26\u53F7:<strong>admin</strong> \u5BC6\u7801:<strong>passwor_123</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# configure terminal
OS10(config)# username admin password passwor_123 role sysadmin
OS10(config)# end
OS10# write memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u5E26\u5916\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5E26\u5916\u7BA1\u7406" aria-hidden="true">#</a> \u8BBE\u7F6E\u5E26\u5916\u7BA1\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10#
OS10# configure terminal  
OS10(config)# interface mgmt 1/1/1
OS10(conf-if-ma-1/1/1)# no ip address dhcp
OS10(conf-if-ma-1/1/1)# no ipv6 address autoconfig
OS10(conf-if-ma-1/1/1)# exit
OS10(config)# ip vrf management
OS10(conf-vrf)# interface management
OS10(conf-vrf)# exit
OS10(config)# interface mgmt 1/1/1
OS10(conf-if-ma-1/1/1)# ip address 10.0.0.1/24
OS10(conf-if-ma-1/1/1)# no shutdown
OS10(conf-if-ma-1/1/1)# show configuration
!
interface mgmt1/1/1
no shutdown
no ip address dhcp
ip address 10.0.0.1/24
OS10(conf-if-ma-1/1/1)# exit
OS10#OS10(config)# management route 0.0.0.0/0 172.16.1.254 (\u5E26\u5916\u7F51\u7EDC\u9ED8\u8BA4\u8DEF\u7531)
OS10(config)#do write
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EA4\u6362\u673A\u63A5\u53E3\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6362\u673A\u63A5\u53E3\u914D\u7F6E" aria-hidden="true">#</a> \u4EA4\u6362\u673A\u63A5\u53E3\u914D\u7F6E</h2><h3 id="\u8BBE\u7F6Eaccsee\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6Eaccsee\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u7F6EAccsee\u6A21\u5F0F</h3><p>\u4F8B\uFF1A\u521B\u5EFA VLAN10 \u5E76\u5C06 e1/1/1 \u63A5\u53E3\u4EE5 access \u6A21\u5F0F\u5212\u5165 vlan10.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# configure terminal
OS10(config)# interface vlan 10            //\u521B\u5EFAvlan10
OS10(conf-if-vl-10)# exit
OS10(config)# interface e1/1/1
OS10(conf-if-eth1/1/1)# switchport mode access     //\u8BBE\u7F6E\u4E3Aaccsee\u6A21\u5F0F
OS10(conf-if-eth1/1/1)# switchport access vlan 10   // \u8BBE\u7F6E\u4E3Avlan 10\u901A\u8FC7
OS10(conf-if-eth1/1/1)# no shutdown
OS10(conf-if-eth1/1/1)# do write
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trunk-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#trunk-\u6A21\u5F0F" aria-hidden="true">#</a> Trunk \u6A21\u5F0F</h3><p>\u4F8B\uFF1A\u521B\u5EFA VLAN10 \u548C 20\uFF0C\u5E76\u5C06 e1/1/2 \u63A5\u53E3\u914D\u7F6E\u4E3A trunk \u6A21\u5F0F\u4E14\u653E\u884C vlan10 \u548C 20.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# configure terminal
OS10(config)# interface vlan 10
OS10(conf-if-vl-10)# exit
OS10(config)# interface vlan 20
OS10(conf-if-vl-20)# exit
OS10(config)# interface e1/1/2
OS10(conf-if-eth1/1/2)# switchport mode trunk         //\u8BBE\u7F6E\u4E3Atrunk\u6A21\u5F0F
OS10(conf-if-eth1/1/2)# switchport trunk allowed vlan 10,20  //\u5141\u8BB8vlan10 20 \u901A\u8FC7
OS10(conf-if-eth1/1/2)# show configuration
!
interface ethernet1/1/2
no shutdown
switchport mode trunk
switchport access vlan 1 (\u5982\u679C\u4F60\u5E0C\u671B \u9ED8\u8BA4vlan \u4E3A 2\uFF0C\u6B64\u5904\u8BF7 switch access vlan 2 )
switchport trunk allowed vlan 10,20
OS10(conf-if-eth1/1/2)# do write memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u9ED8\u8BA4-vlan" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4-vlan" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4 VLAN</h3><p>OS10 \u9ED8\u8BA4 VLAN \u662F 1 \u4E14\u9ED8\u8BA4\u6240\u6709 trunk \u53E3\u90FD untagged vlan1\uFF0C\u5982\u679C\u9700\u8981\u4FEE\u6539\u5176\u4ED6 VLAN \u4E3A \u9ED8\u8BA4 VLAN</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# configure terminal
OS10(config)# interface vlan 4093
OS10(conf-if-vl-4093)# exit
OS10(config)# default vlan-id 4093
OS10(config)# do show vlan
Codes: * - Default VLAN, M - Management VLAN, R - Remote Port Mirroring VLANs
Q: A - Access (Untagged), T - Tagged
NUM Status Description Q Ports
1 Inactive
* 4093 Active A Eth1/1/1-1/1/32
OS10(config)#do write
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u94FE\u8DEF\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u94FE\u8DEF\u805A\u5408" aria-hidden="true">#</a> \u8BBE\u7F6E\u94FE\u8DEF\u805A\u5408</h2><h3 id="\u9759\u6001\u94FE\u8DEF\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u94FE\u8DEF\u805A\u5408" aria-hidden="true">#</a> \u9759\u6001\u94FE\u8DEF\u805A\u5408</h3><p>\u672C\u4F8B\uFF1A\u5BF9 e1/1/49 \u548C 50 \u63A5\u53E3\u9759\u6001\u805A\u5408\u4E3A PO1\uFF0C\u5E76\u4E14\u914D\u7F6E\u4E3A trunk \u6A21\u5F0F\u548C\u653E\u884C vlan10,20</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# configure terminal
OS10(config)# interface port-channel 1              //\u521B\u5EFA\u805A\u5408\u53E31
OS10(conf-if-po-1)# switchport mode trunk             //\u8BBE\u7F6E\u4E3Atrunk\u6A21\u5F0F
OS10(conf-if-po-1)# switchport trunk allowed vlan 10,20   //\u653E\u884Cvlan 10,20
OS10(conf-if-po-1)# no shutdown
OS10(conf-if-po-1)# exit
OS10(config)# interface range e1/1/49-1/1/50           //\u8FDB\u51651/1/49-1/1/50\u63A5\u53E3
OS10(conf-range-eth1/1/49-1/1/50)# channel-group 1      // \u52A0\u5165\u805A\u5408\u53E31
OS10(conf-range-eth1/1/49-1/1/50)# no shutdown           
OS10(conf-range-eth1/1/49-1/1/50)# end
OS10#write
\u67E5\u770B\uFF1A
OS10# show interface port-channel 1 summary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001-lacp-\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001-lacp-\u805A\u5408" aria-hidden="true">#</a> \u52A8\u6001 LACP \u805A\u5408</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# configure terminal
OS10(config)# interface port-channel 1
OS10(conf-if-po-1)# switchport mode trunk
OS10(conf-if-po-1)# switchport trunk allowed vlan 10,20
OS10(conf-if-po-1)# no shutdown
OS10(conf-if-po-1)# exit
OS10(config)# interface range e1/1/49-1/1/50
OS10(conf-range-eth1/1/49-1/1/50)# channel-group 1 mode active   //\u8BBE\u7F6E\u4E3Alacp\u6A21\u5F0F
OS10(conf-range-eth1/1/49-1/1/50)# no shutdown
OS10(conf-range-eth1/1/49-1/1/50)# end
OOS100#write
\u67E5\u770B\uFF1A
OOS100# show interface port-channel 1 summary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u672C\u5730\u7AEF\u53E3\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u7AEF\u53E3\u955C\u50CF" aria-hidden="true">#</a> \u672C\u5730\u7AEF\u53E3\u955C\u50CF</h2><p>\u672C\u4F8B\u4E2D\uFF0C\u5C06 e1/1/1 \u53E3\u7684\u8FDB\u548C\u51FA\u4E24\u4E2A\u65B9\u5411\u7684\u6D41\u91CF\u955C\u50CF\u5230 e1/1/2 \u53E3\u8FDB\u884C\u6293\u5305\u5206\u6790\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10(config)# interface e1/1/2
OS10(conf-if-eth1/1/2)# no switchport
OS10(conf-if-eth1/1/2)#exit
OS10(config)# monitor session 1             //\u521B\u5EFA\u672C\u5730\u955C\u50CF\u7EC4
OS10(conf-mon-local-1)# source interface ethernet 1/1/1 both    //\u8BBE\u7F6E\u6E90\u7AEF\u53E3\uFF08\u88AB\u76D1\u63A7\u7684\uFF09
OS10(conf-mon-local-1)# destination interface e1/1/2            //\u8BBE\u7F6E\u76EE\u7684\u7AEF\u53E3\uFF08\u76D1\u63A7\u7684\uFF09
OS10(conf-mon-local-1)# no shut
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dhcp-server-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#dhcp-server-\u914D\u7F6E" aria-hidden="true">#</a> DHCP Server \u914D\u7F6E</h2><p>\u672C\u4F8B\u4E2D\uFF0C\u7F51\u6BB5\u4E3A192.168.10.0/24\uFF0C\u7F51\u5173\u4E3A192.168.10.1\uFF0Cdns\u4E3A8.8.8.8\u548C9.9.9.9\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
OS10# configure terminal
OS10(config)# ip dhcp server
OS10(config-dhcp)# pool 192_168_10
OS10(config-dhcp-192_168_10)# lease 0 6 0 \uFF08\u79DF\u671F\u4E3A 6 \u5C0F\u65F6\uFF09
OS10(config-dhcp-192_168_10)# network 192.168.10.0/24 \uFF08\u6B64\u5904\u7684/24 \u524D\u9762\u662F\u6CA1\u6709\u7A7A\u683C\u7684\uFF09
OS10(config-dhcp-192_168_10)# default-router 192.168.10.1 \uFF08\u7F51\u5173\u5730\u5740\uFF09
OS10(config-dhcp-192_168_10)# dns-server 8.8.8.8
OS10(config-dhcp-192_168_10)# dns-server 9.9.9.9
OS10(config-dhcp-192_168_10)# domain-name dhcp.os10.dell \uFF08\u540D\u79F0\uFF0C\u53EF\u9009\uFF09
OS10(config-dhcp-192_168_10)# exit
OS10(config-dhcp)# no disable
OS10(config-dhcp)# do write
\u67E5\u770B\u5730\u5740\u5206\u914D\u8868:
OS10#show ip dhcp binding
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E00\u822C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u547D\u4EE4" aria-hidden="true">#</a> \u4E00\u822C\u547D\u4EE4</h2><h4 id="\u4FDD\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58" aria-hidden="true">#</a> \u4FDD\u5B58</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10# write //\u4FDD\u5B58\u4EA4\u6362\u673A\u914D\u7F6E\uFF0C\u8BF7\u5728\u5B8C\u6210\u5FC5\u8981\u914D\u7F6E\u4E4B\u540E\uFF0C\u8BB0\u5F97\u4F7F\u7528\u6B64\u547D\u4EE4\u4FDD\u5B58\uFF0C\u5426\u5219\u4EA4\u6362\u673A\u91CD\u542F\u540E\u6CA1\u4FDD\u5B58\u7684\u914D\u7F6E\u5C06\u4E22\u5931
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u540D\u79F0" aria-hidden="true">#</a> \u4FEE\u6539\u540D\u79F0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10&gt;en
OS10#configure
OS10(config)#hostname ABC //\u5C06\u4EA4\u6362\u673A\u6539\u540D\u4E3AABC
OS10(config)#end
OS10#write
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u914D\u7F6E\u8FB9\u7F18\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8FB9\u7F18\u7AEF\u53E3" aria-hidden="true">#</a> \u914D\u7F6E\u8FB9\u7F18\u7AEF\u53E3</h4><p><strong>\u8FDE\u63A5\u5230\u6B64\u4EA4\u6362\u673A\u7684\u7535\u8111\u83B7\u53D6DHCP\u975E\u5E38\u6162\uFF0C\u6216\u8005\u5F88\u6162\u624D\u80FD\u591F\u8BC6\u522B\u7F51\u7EDC\uFF0C\u53EF\u4EE5\u8003\u8651\u914D\u7F6E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10#configure
OS10(config)#interface gi1/0/1 //\u5982\u679C\u5BF9\u591A\u4E2A\u7AEF\u53E3\u540C\u65F6\u914D\u7F6E\uFF0C\u53EF\u4EE5\u4F7F\u7528interface range gi1/0/1-12
OS10(config-if)# spanning-tree portfast
OS10(config-if)#exit
OS10(config)#end
OS10#write

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5F00\u542F\u5DE8\u5E27\u6D41\u63A7" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u5DE8\u5E27\u6D41\u63A7" aria-hidden="true">#</a> \u5F00\u542F\u5DE8\u5E27\u6D41\u63A7</h4><p><strong>\u8FDE\u63A5ISCSI\u5B58\u50A8\u65F6\u4E00\u822C\u5EFA\u8BAE\u914D\u7F6E\u5DE8\u5E27\u548C\u6D41\u63A7</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10&gt;enable
OS10#configure
OS10(config)#system jumbo mtu 9216 -------------\u5F00\u5DE8\u5E27
OS10(config)#flowcontrol receive on -------------\u5F00\u6D41\u63A7
OS10(config)#end
OS10#write
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u914D\u7F6E-\u91CD\u7F6E\u4EA4\u6362\u673A" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u914D\u7F6E-\u91CD\u7F6E\u4EA4\u6362\u673A" aria-hidden="true">#</a> \u5220\u9664\u914D\u7F6E\uFF08\u91CD\u7F6E\u4EA4\u6362\u673A\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OS10&gt;enable
OS10#write //\u4FDD\u5B58\u914D\u7F6E
OS10#delete startup-config //\u5220\u9664\u542F\u52A8\u914D\u7F6E\u6587\u4EF6
Delete startup-config ? (y/n) y //y \u786E\u8BA4\u5220\u9664
OS10# reload //\u91CD\u542F\u4EA4\u6362\u673A
Are you sure you want to reload the stack? (y/n) y //y \u786E\u8BA4\u91CD\u542F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),r=[s];function l(c,v){return n(),i("div",null,r)}var o=e(a,[["render",l],["__file","index.html.vue"]]);export{o as default};
