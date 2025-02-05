### Problem 1. Access Technologies

List four examples and classify them as follows:

- **DSL (Digital Subscriber Line):** Typically used for **home access**.
- **Cable Modem:** Also used for **home access**.
- **Ethernet (or a leased T1/T3 line):** Often used in businesses for **enterprise access**.
- **Cellular (e.g. 3G/4G/5G):** Used for **wide‐area wireless access**.

*Any four examples with similar classifications are acceptable.*

---

### Problem 2. End-to-End Delay with One Switch

There is one packet switch between a sending host and a receiving host. The transmission delay on the first link is
\[
d_{\text{trans}_1} = \frac{L}{R_1},
\]
and on the second link it is
\[
d_{\text{trans}_2} = \frac{L}{R_2}.
\]
Because the switch is store‐and‐forward (i.e. it must receive the entire packet before beginning to transmit it), the total end‐to‐end delay (ignoring queuing, propagation, and processing delays) is

\[
d_{\text{total}} = \frac{L}{R_1} + \frac{L}{R_2}\,.
\]

---

### Problem 3. Components of End-to-End Delay

When a packet travels from a source to a destination, the following delay components are incurred:

1. **Processing delay:** The time a router takes to examine the packet’s header and determine where to direct the packet.
2. **Queuing delay:** The time the packet spends waiting in a router’s queue.
3. **Transmission delay:** The time required to push all of the packet’s bits onto the link (i.e. \(L/R\)).
4. **Propagation delay:** The time for a bit to travel from the beginning of the link to the next router (i.e. distance divided by propagation speed, \(m/s\)).

**Which are constant?**

- For a given packet on a given link, the **transmission delay** and **propagation delay** are fixed.
- The **processing delay** is usually very short and nearly constant.

**Which is variable?**

- **Queuing delay** is highly variable and depends on the current traffic load.

---

### Problem 4. Throughput and File Transfer Time

Suppose Host A sends a large file to Host B over a path with three links with capacities:
- \(R_1 = 500\,\text{kbps}\),
- \(R_2 = 2\,\text{Mbps}\),
- \(R_3 = 1\,\text{Mbps}\).

#### (a) Throughput

The throughput is determined by the **bottleneck** (the smallest rate). Here:
\[
\min\{500\,\text{kbps},\,2\,\text{Mbps},\,1\,\text{Mbps}\} = 500\,\text{kbps}.
\]

#### (b) Transfer Time for a 4‐Million–Byte File

Convert file size to bits:
\[
4\,\text{million bytes} = 4 \times 10^6 \times 8 = 32 \times 10^6\,\text{bits}\,.
\]
At 500 kbps (i.e. \(500,000\,\text{bits/s}\)):
\[
\text{Transfer time} = \frac{32 \times 10^6\,\text{bits}}{500,000\,\text{bits/s}} = 64\,\text{seconds}\,.
\]

#### (c) Now with \(R_2 = 100\,\text{kbps}\)

The three rates become:
- \(R_1 = 500\,\text{kbps}\),
- \(R_2 = 100\,\text{kbps}\),
- \(R_3 = 1\,\text{Mbps}\).

Now the bottleneck is 100 kbps. Thus, throughput = 100 kbps, and
\[
\text{Transfer time} = \frac{32 \times 10^6\,\text{bits}}{100,000\,\text{bits/s}} = 320\,\text{seconds}\,.
\]

---

### Problem 5. Propagation vs. Transmission Delay

Let two hosts be connected by a single link of rate \(R\) (bps) over which a packet of length \(L\) (bits) is sent. The hosts are \(m\) meters apart and the propagation speed is \(s\) (meters/sec).

#### (a) Propagation Delay

\[
d_{\text{prop}} = \frac{m}{s}\,.
\]

#### (b) Transmission Delay

\[
d_{\text{trans}} = \frac{L}{R}\,.
\]

#### (c) End-to-End Delay (Ignoring Processing and Queuing)

\[
d_{\text{total}} = d_{\text{trans}} + d_{\text{prop}} = \frac{L}{R} + \frac{m}{s}\,.
\]

#### (d) Location of the Last Bit at \(t = d_{\text{trans}}\)

At \(t=d_{\text{trans}}\), Host A has finished transmitting the packet. Thus, the **last bit** has just been put onto the link (i.e. it is at the very beginning of the link).

#### (e) Case: \(d_{\text{prop}} > d_{\text{trans}}\)

The **first bit** was transmitted at \(t=0\) and travels at speed \(s\). At \(t=d_{\text{trans}}\) it has traveled a distance
\[
s \cdot d_{\text{trans}}
\]
but it has not yet reached Host B (since \(s\cdot d_{\text{trans}} < m\)). Thus, the first bit is still in transit along the link.

#### (f) Case: \(d_{\text{prop}} < d_{\text{trans}}\)

Now the first bit reaches Host B at time \(d_{\text{prop}}\), which is less than \(d_{\text{trans}}\). Therefore, at \(t=d_{\text{trans}}\) the **first bit** is already at Host B.

#### (g) Find \(m\) When \(d_{\text{prop}} = d_{\text{trans}}\)

Given:
- \(s = 2.5\times10^8\,\text{m/s}\),
- \(L = 1500\) bytes \(= 1500\times8 = 12\,000\,\text{bits}\),
- \(R = 10\,\text{Mbps} = 10\times10^6\,\text{bps}\).

Then
\[
d_{\text{trans}} = \frac{12\,000}{10\times10^6} = 0.0012\,\text{sec}\,.
\]
Set \(d_{\text{prop}} = d_{\text{trans}}\):
\[
\frac{m}{s} = 0.0012\,\text{sec} \quad\Longrightarrow\quad m = s\cdot 0.0012 = 2.5\times10^8 \times 0.0012 = 300\,000\,\text{meters}\,.
\]
That is, \(m=300\,\text{km}\).

---

### Problem 6. Throughput with \(M\) Client–Server Pairs

Assume there are \(M\) client–server pairs. Let
- \(R_s\) be the rate of each server’s link,
- \(R_c\) be the rate of each client’s link,
- \(R\) be the rate of the single network (bottleneck) link.

Since the \(M\) flows share the network link, each gets at most \(R/M\) if that is the bottleneck. Therefore, the throughput available to a given pair is limited by

\[
\text{Throughput} = \min\Big\{R_s,\; R_c,\; \frac{R}{M}\Big\}\,.
\]

---

### Problem 7. Message Segmentation

A message of \(10^6\) bits is to be sent over a network in which every link is \(5\,\text{Mbps}\). Assume that there are (at least) two packet switches along the path (so that there are three links). We ignore propagation, queuing, and processing delays.

#### (a) Without Message Segmentation

- **First Link (Source to First Switch):**  
  Time to send the whole message:  
  \[
  \frac{10^6\,\text{bits}}{5\times10^6\,\text{bps}} = 0.2\,\text{sec}\,.
  \]
- Because each switch uses store‐and‐forward switching, the entire message must be received at a switch before it is forwarded. Hence, the delay on each link is 0.2 sec. With three links, the total end–to–end delay is:
  \[
  0.2 + 0.2 + 0.2 = 0.6\,\text{sec}\,.
  \]

#### (b) With Message Segmentation into 100 Packets

Each packet is
\[
\frac{10^6\,\text{bits}}{100} = 10\,000\,\text{bits}\,.
\]
The transmission time for one packet is
\[
\frac{10\,000}{5\times10^6} = 0.002\,\text{sec}\,.
\]

- **First Packet from Source to First Switch:**  
  It takes 0.002 sec.
- **Arrival of the Second Packet at the First Switch:**  
  The source begins transmitting packet 2 immediately after finishing packet 1. Therefore, packet 2 is completely transmitted at
  \[
  2 \times 0.002 = 0.004\,\text{sec}\,.
  \]
  (Since we ignore propagation delay, this is also the time it is fully received at the first switch.)

#### (c) End-to-End Delay with Segmentation

Because of pipelining the switches can start forwarding a packet as soon as it is fully received. For a path with three links:
- The first packet reaches the destination after:
  \[
  3 \times 0.002 = 0.006\,\text{sec}\,.
  \]
- The last (100th) packet leaves the source at
  \[
  100 \times 0.002 = 0.2\,\text{sec}\,,
  \]
  and then must go through the two remaining links (each taking 0.002 sec). Thus, the last packet arrives at the destination at
  \[
  0.2 + 0.002 + 0.002 = 0.204\,\text{sec}\,.
  \]
Thus the total time to move the file from source to destination is about **0.204 seconds**.

**Comparison:** Without segmentation the delay was 0.6 sec; with segmentation (and pipelining) the delay is reduced to about 0.204 sec.

#### (d) Other Reasons to Use Message Segmentation

- **Reliability:** If one packet is lost, only that small packet needs to be retransmitted rather than the entire message.
- **Multiplexing:** It allows packets from different messages (or different users) to be interleaved on the same link.
- **Buffer Management:** Smaller packets reduce the amount of buffering required in the network.
- **Fairness and Concurrency:** It allows the network to share resources among many flows, which is important for interactive applications.

#### (e) Drawbacks of Message Segmentation

- **Overhead:** Each packet carries its own header, so the overhead increases with the number of packets.
- **Out-of-Order Delivery:** Packets may take different paths and arrive out of order, requiring reordering at the destination.
- **Increased Processing:** Routers and end–systems must process many more packets.
- **Error Rate:** In error–prone networks, a larger number of packets increases the probability that some will be corrupted, leading to retransmissions.

---

### Problem 8. Queuing Delay Plus Transmission Delay

We are told that the queuing delay is given by
\[
d_{\text{queue}} = \frac{I\,L}{R(1-I)}\quad \text{for } I<1,
\]
where the traffic intensity is
\[
I = \frac{L\,a}{R}\,,
\]
with \(a\) being the average packet arrival rate.

#### (a) Total Delay Formula

The transmission delay is
\[
d_{\text{trans}} = \frac{L}{R}\,.
\]
Thus, the total delay is
\[
d_{\text{total}} = d_{\text{trans}} + d_{\text{queue}} = \frac{L}{R} + \frac{I\,L}{R(1-I)}\,.
\]
Factor \(\frac{L}{R}\) out:
\[
d_{\text{total}} = \frac{L}{R}\left[1 + \frac{I}{1-I}\right] = \frac{L}{R}\left[\frac{1-I+I}{1-I}\right] = \frac{L}{R}\cdot\frac{1}{1-I}\,.
\]

#### (b) Plot Description

When plotting the total delay versus \(\frac{L}{R}\), note that
\[
d_{\text{total}} = \frac{L/R}{1-I}\,.
\]
For a given traffic intensity \(I\) (which depends on the arrival rate and is assumed fixed in the plot), the total delay is a scaled version of \(L/R\) that increases without bound as \(I\) approaches 1. In other words, the plot is a straight line (with slope \(1/(1-I)\)) when \(I\) is small but will “blow up” as \(I\to 1\).

---

### Problem 9. (Same as Problem 4 Repeated)

Again, suppose Host A sends a large file over three links with:
- \(R_1 = 500\,\text{kbps}\),
- \(R_2 = 2\,\text{Mbps}\),
- \(R_3 = 1\,\text{Mbps}\).

#### (1) Throughput

The throughput is the minimum of the three rates:
\[
\min\{500\,\text{kbps},\,2\,\text{Mbps},\,1\,\text{Mbps}\} = 500\,\text{kbps}\,.
\]

#### (2) File Transfer Time for a 4-Million–Byte File

File size: \(4 \times 10^6\) bytes \(= 32 \times 10^6\) bits. Then,
\[
\text{Transfer time} = \frac{32 \times 10^6}{500\,000} = 64\,\text{seconds}\,.
\]

#### (3) With \(R_2 = 100\,\text{kbps}\)

Now the bottleneck is:
\[
\min\{500\,\text{kbps},\,100\,\text{kbps},\,1\,\text{Mbps}\} = 100\,\text{kbps}\,.
\]
Thus,
\[
\text{Transfer time} = \frac{32 \times 10^6}{100\,000} = 320\,\text{seconds}\,.
\]

