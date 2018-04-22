### Iterable vs Oserable
* Observables fill the gap by being the ideal way to access asynchronous sequences of multiple items

| | single items | multiple items |
| ------ | ----------- | ----------- |
| synchronous	| T getData()	| Iterable \<T> getData() |
| asynchronous |	Future \<T> getData() |	Observable \<T> getData() |
* Observale 有时间的概念

| |Singular	|Plural|
| ------ | ----------- | ----------- |
|Spatial	|Value	|Iterable<Value>|
|Temporal	|Promise<Value>	|Observable<Value>|
### Observables Are Flexible
| |event	Iterable (pull)	|Observable (push)|
| ------ | ----------- | ----------- |
|retrieve data|	T next()|	onNext(T)|
discover error|	throws Exception|	onError(Exception)
|complete|	!hasNext()|	onCompleted()|


### Debounce vs throttle
* Debounce： 防止抖动，即短时间间隔的事件序列将会归为一个，不管事件序列多长。
* immediate: 前缘版的Debounce，即先通过事件处理，后续的抖动忽略。
* throttle： 节流阀， 固定时间片段只允许一个事件通过。

### Sample vs throttle
* Sample： 每一段时间采样，不管有没有数据。 可以理解为，管子的通水量一直是xL/2
* throttle: 固定单位时间内，只能通过一个数据。可以理解为，管子的通水量最大是xL/2
