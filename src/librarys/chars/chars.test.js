(()=>{var C=r=>r.charCodeAt(0),c=r=>String.fromCharCode(r),h=(r,t)=>{let o=[];for(let e=0;e<r.length;e++){let n=r.charAt(e),a=C(n);typeof t=="number"&&(a=a+t),o.push(a)}return o},s=(r,t)=>{let o=[];for(let e of r){let n=e;typeof t=="number"&&(n=n+t),o.push(c(n))}return o.join("")};(async()=>{let r=C("a");console.log("charCode",r);let t=c(r);console.log("char",t);let o="test key....";console.log("testKey",o);let e=h(o,-3);e.forEach((a,g)=>{console.log(g+"__",a)});let n=s(e,3);console.log("charCodeArrayToString",n)})();})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY2hhcnMudHMiLCAiY2hhcnMudGVzdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IGdldENoYXJUb0NoYXJDb2RlID0gKGNoYXI6IHN0cmluZyk6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIGNoYXIuY2hhckNvZGVBdCgwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyQ29kZVRvQ2hhciA9IChjaGFyQ29kZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RyaW5nVG9DaGFyQ29kZUFycmF5ID0gKHRleHQ6IHN0cmluZywgZmFrZVZhcmlhbmNlPzogbnVtYmVyKTogbnVtYmVyW10gPT4ge1xyXG4gIGNvbnN0IGNoYXJDb2RlczogbnVtYmVyW10gPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNoYXIgPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgIGxldCBjaGFyQ29kZSA9IGdldENoYXJUb0NoYXJDb2RlKGNoYXIpO1xyXG4gICAgaWYgKHR5cGVvZiBmYWtlVmFyaWFuY2UgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGNoYXJDb2RlID0gY2hhckNvZGUgKyBmYWtlVmFyaWFuY2U7XHJcbiAgICB9XHJcbiAgICBjaGFyQ29kZXMucHVzaChjaGFyQ29kZSk7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFyQ29kZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhckNvZGVBcnJheVRvU3RyaW5nID0gKGNoYXJDb2RlQXJyYXk6IG51bWJlcltdLCB2YXJpYW5jZT86IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgY2hhcnM6IHN0cmluZ1tdID0gW107XHJcbiAgZm9yIChjb25zdCBjaGFyQ29kZUFycmF5SXRlbSBvZiBjaGFyQ29kZUFycmF5KSB7XHJcbiAgICBsZXQgY2hhckNvZGUgPSBjaGFyQ29kZUFycmF5SXRlbTtcclxuICAgIGlmICh0eXBlb2YgdmFyaWFuY2UgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGNoYXJDb2RlID0gY2hhckNvZGUgKyB2YXJpYW5jZTtcclxuICAgIH1cclxuICAgIGNoYXJzLnB1c2goZ2V0Q2hhckNvZGVUb0NoYXIoY2hhckNvZGUpKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xyXG59OyIsICJpbXBvcnQgeyBnZXRDaGFyQ29kZUFycmF5VG9TdHJpbmcsIGdldENoYXJDb2RlVG9DaGFyLCBnZXRDaGFyVG9DaGFyQ29kZSwgZ2V0U3RyaW5nVG9DaGFyQ29kZUFycmF5IH0gZnJvbSBcIi4vY2hhcnNcIjtcclxuXHJcbihhc3luYygpID0+IHtcclxuICBjb25zdCBjaGFyQ29kZSA9IGdldENoYXJUb0NoYXJDb2RlKCdhJyk7XHJcbiAgY29uc29sZS5sb2coJ2NoYXJDb2RlJywgY2hhckNvZGUpO1xyXG5cclxuICBjb25zdCBjaGFyID0gZ2V0Q2hhckNvZGVUb0NoYXIoY2hhckNvZGUpO1xyXG4gIGNvbnNvbGUubG9nKCdjaGFyJywgY2hhcik7XHJcblxyXG4gIGNvbnN0IHRlc3RLZXkgPSBgdGVzdCBrZXkuLi4uYDtcclxuICBjb25zb2xlLmxvZygndGVzdEtleScsIHRlc3RLZXkpO1xyXG4gIGNvbnN0IHRlc3RLZXlUb0NoYXJDb2RlQXJyYXkgPSBnZXRTdHJpbmdUb0NoYXJDb2RlQXJyYXkodGVzdEtleSwgLTMpO1xyXG4gIHRlc3RLZXlUb0NoYXJDb2RlQXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4ICsgJ19fJywgaXRlbSk7XHJcbiAgfSk7XHJcbiAgY29uc3QgY2hhckNvZGVBcnJheVRvU3RyaW5nID0gZ2V0Q2hhckNvZGVBcnJheVRvU3RyaW5nKHRlc3RLZXlUb0NoYXJDb2RlQXJyYXksIDMpO1xyXG4gIGNvbnNvbGUubG9nKCdjaGFyQ29kZUFycmF5VG9TdHJpbmcnLCBjaGFyQ29kZUFycmF5VG9TdHJpbmcpO1xyXG59KSgpOyJdLAogICJtYXBwaW5ncyI6ICJNQUFPLEdBQU0sR0FBb0IsQUFBQyxHQUN6QixFQUFLLFdBQVcsQ0FBQyxFQUdiLEVBQW9CLEFBQUMsR0FDekIsT0FBTyxhQUFhLENBQVEsRUFHeEIsRUFBMkIsQ0FBQyxFQUFjLElBQW9DLENBQ3pGLEdBQU0sR0FBc0IsQ0FBQyxFQUM3QixPQUFTLEdBQUksRUFBRyxFQUFJLEVBQUssT0FBUSxJQUFLLENBQ3BDLEdBQU0sR0FBTyxFQUFLLE9BQU8sQ0FBQyxFQUN0QixFQUFXLEVBQWtCLENBQUksRUFDckMsQUFBSSxNQUFPLElBQWlCLFVBQzFCLEdBQVcsRUFBVyxHQUV4QixFQUFVLEtBQUssQ0FBUSxDQUN6QixDQUNBLE1BQU8sRUFDVCxFQUVhLEVBQTJCLENBQUMsRUFBeUIsSUFBOEIsQ0FDOUYsR0FBTSxHQUFrQixDQUFDLEVBQ3pCLE9BQVcsS0FBcUIsR0FBZSxDQUM3QyxHQUFJLEdBQVcsRUFDZixBQUFJLE1BQU8sSUFBYSxVQUN0QixHQUFXLEVBQVcsR0FFeEIsRUFBTSxLQUFLLEVBQWtCLENBQVEsQ0FBQyxDQUN4QyxDQUNBLE1BQU8sR0FBTSxLQUFLLEVBQUUsQ0FDdEIsRUM3QkEsQUFBQyxVQUFXLENBQ1YsR0FBTSxHQUFXLEVBQWtCLEdBQUcsRUFDdEMsUUFBUSxJQUFJLFdBQVksQ0FBUSxFQUVoQyxHQUFNLEdBQU8sRUFBa0IsQ0FBUSxFQUN2QyxRQUFRLElBQUksT0FBUSxDQUFJLEVBRXhCLEdBQU0sR0FBVSxlQUNoQixRQUFRLElBQUksVUFBVyxDQUFPLEVBQzlCLEdBQU0sR0FBeUIsRUFBeUIsRUFBUyxFQUFFLEVBQ25FLEVBQXVCLFFBQVEsQ0FBQyxFQUFNLElBQVUsQ0FDOUMsUUFBUSxJQUFJLEVBQVEsS0FBTSxDQUFJLENBQ2hDLENBQUMsRUFDRCxHQUFNLEdBQXdCLEVBQXlCLEVBQXdCLENBQUMsRUFDaEYsUUFBUSxJQUFJLHdCQUF5QixDQUFxQixDQUM1RCxHQUFHIiwKICAibmFtZXMiOiBbXQp9Cg==